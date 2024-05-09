import { useState } from 'react';
import './App.css';

function App() {

  const calButton = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/", "back", "clear"]

  const [valuex, setValue] = useState("")


  function calculatorValue(event) {
    const { value } = event.target;

    if (valuex === "Arithmetic Error") {
      console.log("error occured")
      setValue("")
    } else {
      setValue(valuex.concat(value))
    }
  }


  const equalCalculate = () => {
    try {
      setValue(eval(valuex).toString())
      console.log(eval(valuex))
    } catch (error) {
      setValue("Arithmetic Error")
    }
  }
  
  const backSpace=()=>{
    let lastValue= valuex.length-1
    let removedVal =valuex.substring(0, lastValue)
    setValue(removedVal)

  }


  const clearBoard=()=>{
    setValue("")
  }

  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div className='calculator-board'>
        <p>{valuex.length ==12? setValue("Exceed Erroor", ""): valuex}{}</p>
        <div className='grid-board'>
          {calButton.map((item, id) => {
            return <button className='grid-item' name={id} value={item} onClick={(eventVal) => {
              {
                if (item === "=") {
                  console.log("you pressesd : =")
                  equalCalculate()
                } else if(item === "back"){
                  backSpace()
                } else if(item === "clear"){
                  clearBoard()
                }else {
                  calculatorValue(eventVal)
                }
              }
            }}>{item}</button>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
