import Description from "./Component/Description.js";
import Title from "./Component/Title.js";
import Transaction from "./Component/Transaction.js";
import "./App.css";
import Forminsert from "./Component/Forminsert.js";
import { useState } from "react";

function App() {
  const data = [
    {title:"ค่ารักษาพยาบาล",amount:-2000},
    {title:"เงินเดือน",amount:20000},
    {title:"เงินเดือน",amount:20000}
];
  const [item,setItem] = useState(data)
  const addItem = (newItem) =>
  {
    setItem((e)=>{
      return [newItem,...e]
    })
  }
  return (
    <div>
      <Title />
      <Description />
      <Forminsert insertItem={addItem}/>
      <Transaction data={item}/>
    </div>
  );
}

export default App;
