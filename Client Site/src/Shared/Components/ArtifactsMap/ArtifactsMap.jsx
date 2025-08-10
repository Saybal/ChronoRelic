import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import markerIcon2x from "../../../../node_modules/leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "../../../../node_modules/leaflet/dist/images/marker-icon.png";
// import markerShadow from "../../../../node_modules/leaflet/dist/images/marker-shadow.png";

const ArtifactsMap = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/artifact-map")
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
      });
  }, []);

  console.log("Artifacts:", artifacts);

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/markers/marker-icon-2x.png",
    iconUrl: "/markers/marker-icon.png",
    shadowUrl: "/markers/marker-shadow.png",
  });

  return (
    <div style={{ height: "500px", width: "100%", margin: "40px 0" }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {artifacts.map((artifact, idx) => {
          // Handle single coordinates and arrays
          const latitudes = Array.isArray(artifact.Latitude)
            ? artifact.Latitude
            : [artifact.Latitude];
          const longitudes = Array.isArray(artifact.Longitude)
            ? artifact.Longitude
            : [artifact.Longitude];

          // Ensure equal length for latitudes and longitudes
          const locations = latitudes.map((lat, i) => ({
            lat,
            lng: longitudes[i],
          }));

          return locations.map((location, locIdx) => {
            // Skip if lat or lng is invalid (null, undefined, or non-numeric)
            if (
              typeof location.lat !== "number" ||
              typeof location.lng !== "number" ||
              isNaN(location.lat) ||
              isNaN(location.lng)
            ) {
              console.warn(
                `Invalid coordinates for ${artifact["Artifact-Name"]}:`,
                location
              );
              return null;
            }

            return (
              <Marker
                key={`${idx}-${locIdx}`}
                position={[location.lat, location.lng]}
              >
                <Popup>
                  <div style={{ textAlign: "center" }}>
                    <strong>{artifact["Artifact-Name"]}</strong>
                    <br />
                    <img
                      src={artifact["Artifact-Image"]}
                      alt={artifact["Artifact-Name"]}
                      style={{ width: "100px", height: "auto", marginTop: "5px" }}
                    />
                  </div>
                </Popup>
              </Marker>
            );
          });
        })}
      </MapContainer>
    </div>
  );
};

export default ArtifactsMap;