import Item from "./Item";
import "./Transaction.css";

function Transaction(props)
{
    const {data} = props
    const deleteButton = (id) =>{
        props.deleteButton(id)
    }
    const itemsElement = data.map((e)=>{
    return <Item title={e.title} amount={e.amount} id={e.id} key={e.id} deleteButton={deleteButton} /> //<Item {...e} /> เขียนแบบ spread operator ได้
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