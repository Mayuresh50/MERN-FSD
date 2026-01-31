import "../css/Home.css";

function Home(props) {
  return (
    <div className="homepage">
      <h2>Hello There</h2>
      <p>Name = {props.name}</p>
      <img id="user-img" src={props.image} alt="image"></img>
    </div>
  );
}

export default Home;
