function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact Me here</h1>
      <h3>Cell Phone : {props.phone}</h3>
      <h3>Location : {props.location}</h3>
    </div>
  );
}

export default Contact;
