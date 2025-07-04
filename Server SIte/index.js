const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
var admin = require("firebase-admin");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.shp35fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verify_Firebase_Token = async (req, res, next) => {
  const Authorization = req.headers.authorization;
  if (!Authorization || !Authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ error: true, message: "Unauthorized access" });
  }
  const Token = Authorization.split(" ")[1];

  try {
    const decode = await admin.auth().verifyIdToken(Token);
    req.decodedEmail = decode.email;
    next();
  } catch (error) {
    console.error("Error verifying Firebase token:", error);
    return res
      .status(401)
      .send({ error: true, message: "Unauthorized access" });
  }
};

const verify_Email = async (req, res, next) => {
  // console.log("Query", req.query.email);
  // console.log("Decoded Email", req.decodedEmail);

  if (req.decodedEmail !== req.params.email) {
    return res.status(403).send({ error: true, message: "Forbidden access" });
  }
  next();
};

async function run() {
  try {
    // await client.connect();
    const database = client.db("ArtifactsDB");
    const all_artifacts = database.collection("All_Artifacts");
    const timline = database.collection("Timeline");
    const sortFields = { "Like-Count": -1 };

    //! ALl Artfacts Post API
    app.post("/all-artifacts/:email", verify_Firebase_Token, async (req, res) => {
      const email = req.params.email;

      if (req.decodedEmail !== email) {
        return res.status(403).send({error: true, message: "Forbidden access" });
      }

      const data = req.body;
      const result = await all_artifacts.insertOne(data);
      res.send(result);
    });

    // !All Artifacts Like counter API (Private)
    app.patch("/all-artifacts/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: data,
      };
      const result = await all_artifacts.updateOne(filter, updateDoc);
      res.send(result);
    });

    

    // !All Artifacts Page API
    app.get("/all-artifacts", async (req, res) => {
      const cursor = all_artifacts.find().sort(sortFields);
      const result = await cursor.toArray();

      res.send(result);
    });

    // !Timeline get API
    app.get("/timeline", async (req, res) => {
      const cursor = timline.find().sort({ _id: -1 });
      const result = await cursor.toArray();
      res.send(result);
    });

    // !All Artifacts Details Page API (Private)
    app.get("/all-artifacts/:id/:email", verify_Firebase_Token, async (req, res) => {
      const id = req.params.id;
      const email = req.params.email;

      if (req.decodedEmail !== email) {
        return res
          .status(403)
          .send({ error: true, message: "Forbidden access" });
      }
      const filter = { _id: new ObjectId(id) };
      const result = await all_artifacts.findOne(filter);

      res.send(result);
    });

    //! My Artifacts artifacts API (Private)
    app.get("/my-artifacts/:email", verify_Firebase_Token, async (req, res) => {
      const email = req.params.email;

      if (req.decodedEmail !== email) {
        return res
          .status(403)
          .send({ error: true, message: "Forbidden access" });
      }

      const filter = { Email: email };
      const cursor = all_artifacts.find(filter).sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    // !User's liked artifacts API (Private)
    app.get("/liked/:email", verify_Firebase_Token, async (req, res) => {
      const email = req.params.email;

      if (req.decodedEmail !== email) {
        return res
          .status(403)
          .send({ error: true, message: "Forbidden access" });
      }

      const filter = { "Liked-By": email };
      const cursor = all_artifacts.find(filter).sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    // !Update Page artifacts information getting API (Private)
    app.get("/update/:id/:email", verify_Firebase_Token, async (req, res) => {
      const id = req.params.id;
      const email = req.params.email;

      if (req.decodedEmail !== email) {
        return res
          .status(403)
          .send({ error: true, message: "Forbidden access" });
      }

      const filter = { _id: new ObjectId(id) };
      const result = await all_artifacts.findOne(filter);
      res.send(result);
    });

    // !Update put API
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: data,
      };
      const result = await all_artifacts.updateOne(filter, updateDoc);
      res.send(result);
    });

    // !Delete my artifacts API
    app.delete("/my-artifacts/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await all_artifacts.deleteOne(filter);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
