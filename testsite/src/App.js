import React, {useState} from "react"
import Menu from "./Menu";
import Card from "./Card";
import Popup from "./Popup";


function App() {
  const [amount, setAmount] = useState()

  const setBudget = (budget) => {
    setAmount(budget)
  }

  return (
    <div className="App">
      <Menu />
      <Card />
      <h2>Popup Budget {amount}</h2>
      <Popup setBudget={setBudget} />
    </div>
  );
}

export default App;
