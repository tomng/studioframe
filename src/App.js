import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FramedPhoto />
    </div>
  );
}

function FramedPhoto() {
  const [getImageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=thomas-verbruggen-5A06OWU6Wuc-unsplash.jpg&w=2400"
  );

  return (
    <div className="framedPhoto">
      <div className="photoContainer ken-burns-image-wrap">
        <img alt="Framed Photograph" src={getImageUrl} />
      </div>
    </div>
  );
}
