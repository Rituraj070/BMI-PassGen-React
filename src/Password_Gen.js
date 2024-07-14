import React, { useRef, useState } from "react";

export default function Password_Gen() {



let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LC = "abcdefghijklmnopqrstuvwxyz"
let Num = "0123456789"
let Sym = "!@#$%^&*()<>?/;:'{}[]|~-+_="



  let [upper,setupper] = useState(false)
  let [lower,setlower] = useState(false)
  let [number,setnumber] = useState(false)
  let [symbol,setsymbol] = useState(false)
  let [passlen,setpasslen] = useState(8)
  let [passgen,setpassgen] = useState('')



function get(){

      let char = ''
      let finalpass = ''
        
      if (upper || lower || number || symbol){
            if(upper){
              char = char + UC
            }
            if(lower){
              char = char + LC
            }
            if(number){
              char = char + Num
            }
            if(symbol){
              char = char + Sym
            }

            for(let i=0;i<passlen;i++){
                finalpass = finalpass + char.charAt(Math.floor(Math.random()*char.length))
            }

            setpassgen(finalpass)
      }
      else{
        alert("Please select atleast one checkbox !!")
      }



    }


    function reset(){
      setpassgen('')
    }







  return (
    <div>
      <div className="main w-[400px] h-[500px] bg-slate-50 mt-5 shadow-lg shadow-pink-700 mx-auto">
        <h1 className="text-center font-serif font-bold pt-4 text-xl">
          Password Generator
        </h1>
        <div className="content mt-8">
          <div className="input px-5 mt-5">
            <input type="text" className="w-[100%] h-9 text-center border-4" readOnly value={passgen}/>
            
          </div>

          <div className="flex flex-col p-6">
            <div className="inner mt-[15px]">
              <label htmlFor="passlen" className="font-serif font-bold inline-block w-[80%]">
                Password Length
              </label>
              <input type="number" id="passlen" max={20} min={5} value={passlen} className="w-[15%] text-center border-4" onChange={(event)=>setpasslen(event.target.value)}/>
            </div>
            <div className="inner mt-[15px]">
              <label htmlFor="Uppercase" className="font-medium inline-block w-[80%] ">
                Include Uppercase
              </label>
              <input type="checkbox" id="Uppercase" checked = {upper} className="w-[35px]" onChange={()=>setupper(!upper)}/>
            </div>
            <div className="inner mt-[15px]">
              <label htmlFor="Lowercase" className="font-medium inline-block w-[80%] ">
                Include Lowercase
              </label>
              <input type="checkbox" id="Lowercase" className="w-[35px]" checked = {lower} onChange={()=>setlower(!lower)}/>
            </div>
            <div className="inner mt-[15px]">
              <label htmlFor="Numbers" className="font-medium inline-block w-[80%] ">
                Include Numbers
              </label>
              <input type="checkbox" id="Numbers" className="w-[35px]" checked = {number} onChange={()=>setnumber(!number)}/>
            </div>
            <div className="inner mt-[15px]">
              <label htmlFor="Symbols" className="font-medium inline-block w-[80%] ">
                Include Symbols
              </label>
              <input type="checkbox" id="Symbols" className="w-[35px]" checked = {symbol} onChange={()=>setsymbol(!symbol)}/>
            </div>
          </div>
          <div className="btn px-5 mt-7">
                <button className="w-[100%] bg-red-500 text-white h-8 mb-5 rounded-lg" onClick={get}>Generate Password</button>
                <button className="w-[100%] bg-red-500 text-white h-8 rounded-lg" onClick={reset}>Reset</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
