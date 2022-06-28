import { useState } from "react";
import "./App.css";
import { Dice } from "./component/svg";

const start = {
  id: 71,
  advice:
    " It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

function App() {
  const [advice, setAdvice] = useState(start);

  const changeAdviceHandler = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip);
  };

  return (
    <div className="container">
      <h3 className="title">Advice {advice.id}</h3>
      <p className="advice">"{advice.advice}"</p>
      <div className="divider"></div>
      <div className="dice-holder" onClick={changeAdviceHandler}>
        <Dice className="dice-icon" />
      </div>
    </div>
  );
}

export default App;
