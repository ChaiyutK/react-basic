function Item(props)
{
    return(
        <li className="item">{props.title} <span>-{props.amount} บาท</span></li>
    );
}
export default Item;
