import './Card.css';

function Card(props) {
  const { children, className } = props;
  const classes = `card ${className}`;

  // be careful on using this surrounding container UI :
  // pass the children and do not overwrite className;
  return <div className={classes}>{children}</div>;
}

export default Card;
