import * as React from "react";
import "./styles/App.css";
import * as h3 from "h3-js";

function App() {
  const [latitude, setLatitude] = React.useState<number | null>(null);
  const [longitude, setLongitude] = React.useState<number | null>(null);
  const [status, setStatus] = React.useState<string | null>(null);

  const h3Index = h3.geoToH3(42.3385, -71.1194, 9);
  const boundaries = h3.h3ToGeoBoundary(h3Index);
  const neighborIndices = h3.kRing(h3Index, 1);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div className="App">
      <p>Index: {h3Index}</p>
      <p>Boundaries: {boundaries}</p>
      <p>Neighbors: {neighborIndices.toString()}</p>
      <button onClick={getLocation}>Get Location</button>
      <p>{status}</p>
      {latitude && <p>Latitude: {latitude}</p>}
      {longitude && <p>Longitude: {longitude}</p>}
    </div>
  );
}

export default App;
