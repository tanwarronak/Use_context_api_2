import {  useContext } from "react";
import Buttoncontext from "../store/buttoncontext";
const Show = ()=>{
    const {value} = useContext(Buttoncontext);
    return <>
    <div className="mx-auto p-2 d-flex justify-content-around show border border-5 w-25  ">{value}</div>
    </>
}

export default Show;