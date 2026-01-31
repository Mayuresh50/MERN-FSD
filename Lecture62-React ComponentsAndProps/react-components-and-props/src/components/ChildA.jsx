import ChildB from "../components/ChildB";

function ChildA(props) {
  return <ChildB {...props}  />;
}

export default ChildA;
