import "./App.css";
import { useState } from "react";
import Button from "./Components/Button.jsx";
import TextColor from "./Components/TextColor.jsx";

function App() {
  const [colorText, setColorText] = useState("green");

  const ChangeColor = () => {
    setColorText(colorText === "green" ? "red" : "green");
  };
  return (
    <div className="App">
      <Button const={ChangeColor} name="Canvi" />
      <TextColor colors={colorText} text="CANVI DE COLOR" />
    </div>
  );
}

export default App;
