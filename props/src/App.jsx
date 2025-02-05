import { useState } from "react";
import Item from "./componets/item";
{useState}
function App()
{ 
  const response = [{
    name:"Pranav",
    age:"21",
    city:"Rewa", 
  }]

  let clickHandelr=()=>
  {
    console.log("button clicked")
  }

  return (<>
       <Item name={response[0].name}></Item> 
       <Item name={response[0].age}></Item> 
       <Item name={response[0].city}></Item> 
       <button onClick={clickHandelr}>click</button>
       </>
  )
}
export default App;
