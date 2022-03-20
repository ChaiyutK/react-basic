import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from 'uuid';

function Transaction(props)
{
    const {data} = props
    const itemsElement = data.map((e,i)=>{
    return <Item title={e.title} amount={e.amount} key={i} /> //<Item {...e} /> เขียนแบบ spread operator ได้
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