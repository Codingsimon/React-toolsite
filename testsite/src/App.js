import React, {useState} from "react"
import Menu from "./Menu";
import Card from "./Card";
import Popup from "./Popup";


function App() {
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")

  const setBudget = (budget) => {
    setAmount(budget)
  }

  const setCategoryName = (name) => {
    setName(name)
  }

  return (
    <div className="App">
      <Menu />
      <Card />
      <h2>Popup Budget {amount}</h2>
      <h2>Popup Name {name}</h2>
      <Popup setBudget={setBudget} setCategoryName={setCategoryName} />
    </div>
  );
}

export default App;
