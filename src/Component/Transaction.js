import Item from "./Item";
import "./Transaction.css";

function Transaction()
{
    return(
    <div className="frame-list">
    <ul className="item-list">  
        <Item title="ค่ารักษาพยาบาล" amount="2000"/>
    </ul>
    </div>
    );
}
export default Transaction;