import React from "react";
import "./styles.css";

import FramedPhoto from "./FramedPhoto";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <div className="App">
      <SignIn />
      <FramedPhoto />
    </div>
  );
}
