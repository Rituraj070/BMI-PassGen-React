
import { useState } from "react";


function BMI() {

  let [weight,setweight] = useState(0)
  let [height,setheight] = useState(0)
  let [bmi,setbmi] = useState(0)
  let [message,setmessage] = useState('')
  


  function getBmi() {
     
      setbmi(weight/(height * height))
      getmessage()
      
  }

  function getmessage(){
    if (weight==0 && height==0){
      alert("Please enter data!!")
    }
    else if (bmi<18.5){
      setmessage('You are Underweight')
    }
    else if(bmi>=18.5 && bmi<24.9){
      setmessage('You are Normal')
    }
    else if (bmi>=24.9 && bmi<29.9)
      setmessage('You are Overweight')

    else if (bmi>=29.9){
      setmessage('You are Obese')
    }
   
    
  }

  function clear(){
    setweight(0)
    setheight(0)
    setbmi(0)
    setmessage('')
  }


  

  return (
    <>
      <div className="bmi w-[400px] h-[500px] shadow-lg shadow-red-600 bg-slate-50  mt-8">

        <h3 className="font-bold text-center pt-3 font-serif">BMI CALCULATOR</h3>

        <div className="main flex flex-col p-8">
          <label htmlFor="weight"  className="mt-4  font-serif">Weight (Kg)</label>
          <input type="number" value={weight} id="weight"  min={0} className="mt-4 border-4  h-9 text-center" onChange={(event)=>setweight(event.target.value)}/>
          <label htmlFor="height" className="mt-4 font-serif">Height (Mt)</label>
          <input type="number" value={height} id="height" min={0} className="mt-4 border-4  h-9 text-center" onChange={(event)=>setheight(event.target.value)}/>
          <button className="mt-8 bg-blue-400 h-9 rounded-lg font-semibold" onClick={getBmi}>Submit</button>
          <button className="mt-5 bg-blue-400 h-9 rounded-lg font-semibold" onClick={clear}>Clear</button>
        </div>

        <div className="conent flex justify-center font-serif flex-col items-center">
          <span className="mb-2">Your BMI is : {bmi.toFixed(2)}</span>
          <span>{message}</span>
        </div>

      </div>

    </>
  );
}

export default BMI;
