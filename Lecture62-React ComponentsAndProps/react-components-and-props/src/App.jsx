import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Mayurpic from "./assets/Mayurpic.jpg";
import ChildA from "./components/ChildA";

function App() {
  const [tab, setTab] = useState("Home");
  return (
    <>
      {/* <Card child="real children prop">
        <h2>I am Mayuresh</h2>
        <p>Living in Pune since July,2025</p>
      </Card> */}

      {/* <button onClick={() => setTab("Home")}>Home</button>
      <button onClick={() => setTab("About")}>About</button>
      <button onClick={() => setTab("Contact")}>Contact</button>

      {tab === "Home" ? (
        <Home name="Mayuresh Patil" image={Mayurpic} />
      ) : tab === "About" ? (
        <About desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum consequatur temporibus itaque dolorum ullam nisi unde et! Molestias optio unde voluptatibus tenetur voluptatum mollitia quaerat quia omnis rem, maiores, ratione sequi expedita nostrum fugiat fugit? Nulla accusamus perferendis, dicta quod voluptas quibusdam hic nostrum esse rem dolorum expedita ipsa!" />
      ) : (
        <Contact phone="+91-9876543210" location="Pune, Maharashtra" />
      )} */}

      <ChildA name="Hitesh Patil" desc=" A Computer Engineering Graduate" />
    </>
  );
}

export default App;
