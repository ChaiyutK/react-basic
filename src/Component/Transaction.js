import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from 'uuid';

function Transaction()
{
    const data = [
        {title:"ค่ารักษาพยาบาล",amount:"-2000"},
        {title:"เงินเดือน",amount:"20000"}
];
const itemsElement = data.map((e,i)=>{
    return <Item data={e} key={i} /> //<Item {...e} /> เขียนแบบ spread operator ได้
})
    return(
    <div className="frame-list">
    <ul className="item-list">  
    {itemsElement}
    </ul>
    </div>
    );
}
export default Transaction;