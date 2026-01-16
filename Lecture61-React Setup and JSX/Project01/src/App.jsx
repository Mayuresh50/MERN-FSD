import "./App.css";
import Display from "./components/Display.jsx";
import Card from "./components/Card.jsx";
import Profilecard from "./components/Profilecard.jsx";
import MayurPic from "./assets/MayurPic.jpg";
import download from "./assets/download.jpg";
import Productcard from "./components/Productcard.jsx";

function App() {
  return (
    <>
      {/* <Display name="Mayuresh" />
      <Card theme="light" />
      <Card theme="dark" /> */}
      
      <Profilecard
        name="Mayuresh"
        desc="Computer Engineering Student"
        image={MayurPic}
      />

      <Productcard
        theme="light"
        name="Boat Earphones"
        desc="Rs:2999/-"
        image={download}
      />

      <Productcard
        theme="dark"
        name="Boat Earphones"
        desc="Rs:2999/-"
        image={download}
      />
    </>
  );
}

export default App;
