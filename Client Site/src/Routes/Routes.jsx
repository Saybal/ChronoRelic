import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Shared/Components/Home";
import Login from "../Modules/Auth/Login";
import Register from "../Modules/Auth/Register";
import PrivateRoute from "./Private/PrivateRoute";
import FormSection from "../Modules/Post/Form/FormSection";
import All_Artifacts from "../Shared/Components/All Artifacts/All_Artifacts";
import Like from "../Modules/Post/Like/Like";
import My_Artifacts from "../Modules/Post/My Artifacts/My_Artifacts";
import Update_Section from "../Modules/Post/Update Page/Update_Section";
import Details from "../Shared/Components/Artifact Details/Details";
import Error from "../Shared/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/login",
        Component: Login,
      },
      {
        index: true,
        path: "/register",
        Component: Register,
      },
      {
        index: true,
        path: "all-artifacts",
        Component: All_Artifacts,
      },
      {
        Component: PrivateRoute,
        children: [
          {
            index: true,
            path: "post",
            Component: FormSection,
          },
          {
            index: true,
            path: "/liked/:email",
            Component: Like,
          },
          {
            index: true,
            path: "my-artifacts/:email",
            Component: My_Artifacts,
          },
          {
            index: true,
            path: "update/:id",
            Component: Update_Section,
          },
          {
            index: true,
            path: "artifact-details/:id",
            Component: Details,
          }
          
        ],
      },
    ],
  },
]);
