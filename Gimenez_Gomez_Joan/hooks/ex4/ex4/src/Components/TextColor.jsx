const TextColor = (props) => {
  return (
    <div>
      <h1 style={{ color: props.colors }}>{props.text} </h1>
    </div>
  );
};

export default TextColor;