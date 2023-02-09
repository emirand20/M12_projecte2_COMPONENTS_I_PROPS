const Button = (props) => {
  return (
    <div>
      <button className="Buttons" onClick={props.const}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
