import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Display name="Mayuresh" /> */}
      <Card theme="light" />
      <Card theme="dark" />
    </>
  );
}

export default App;
