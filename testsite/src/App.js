import React, {useState} from "react"
import Menu from "./Menu";
import Card from "./Card";
import Popup from "./Popup";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
  btn: {
      margin: "10px auto",
      display: "block",
  },
})

function App() {
  const [cat, setCat] = useState("")
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [popup, setPopup] = useState(false)

  const setBudget = (budget) => {
    setAmount(budget)
  }

  const setCategoryName = (name) => {
    setName(name)
  }

  const setImage = (image) => {
    setCat(image)
  }

  const togglePopup = () => {
    if(popup){
      setPopup(false)
    } else {
      setPopup(true)
    }

  }

  const classes = useStyles();

  return (
    <div className="App">
      <Menu />
      <h1>Cat Budget</h1>
      { popup ? null : <Card cat={cat} amount={amount} name={name} />}

      { popup ? null : <Button onClick={() => togglePopup()} className={classes.btn} color="primary" variant="contained">Edit Budget</Button>}
      
      { popup ?  <Popup togglePopup={togglePopup} setImage={setImage} setBudget={setBudget} setCategoryName={setCategoryName} />  : null }
    </div>
  );
}

export default App;
