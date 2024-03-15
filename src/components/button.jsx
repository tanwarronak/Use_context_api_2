import React from "react";
import { useContext } from "react";
import Buttoncontext from "../store/buttoncontext";
const Buttons = ()=>{
    const {handleBydecrement,handleByincrement} = useContext(Buttoncontext);
   
    return <>
    <button type="button" className ="btn btn-dark p-5 m-5 fs-3" onClick={handleByincrement}>+</button>
    <button type="button" className="btn btn-dark p-5 m-5 fs-3" onClick={handleBydecrement}>-</button>
    </>
}

export default Buttons;