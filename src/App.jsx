import { useReducer,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Buttons from './components/button';
import Show from './components/showbox';
import Buttoncontext from './store/buttoncontext';
// function change(count,action){

// return [];
// }
const App = ()=>{
  // const [count,dispatchcount] = useReducer(change,[]);
  const [value,setvalue] = useState(0);

  const handleByincrement = ()=>{
     setvalue(value+1);
    
  }
  const handleBydecrement = ()=>{
    setvalue(value-1);
  }
  return <><Buttoncontext.Provider value={{value,setvalue,handleBydecrement,handleByincrement}}>
 <Buttons ></Buttons>
 <Show></Show></Buttoncontext.Provider>
  </>
}

export default App;
