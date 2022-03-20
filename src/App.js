import Description from "./Component/Description.js";
import Title from "./Component/Title.js";
import Transaction from "./Component/Transaction.js";
import "./App.css";
import Forminsert from "./Component/Forminsert.js";
import { useState } from "react";

function App() {
  const data = [
    {id:"1",title:"ค่ารักษาพยาบาล",amount:-2000},
    {id:"2",title:"เงินเดือน",amount:20000},
    {id:"3",title:"เงินเดือน",amount:20000}
];
  const [item,setItem] = useState(data)
  const addItem = (newItem) =>
  {
    setItem((e)=>{
      return [newItem,...e]
    })
  }
  const deleteButton = (id) =>{
    setItem((e)=>{
      return item
    })
    console.log("get id from transaction Component",id)
}
  return (
    <div>
      <Title />
      <Description />
      <Forminsert insertItem={addItem}/>
      <Transaction data={item} deleteButton={deleteButton}/>
    </div>
  );
}

export default App;
