import "./Card.css";

function Card(data) {
  const classes = "card " + data.className;
  return <div className={classes}>{data.children}</div>; //children, content is what is enclosed inside Card component.
}

export default Card;

//when you combine components, you are using composition
