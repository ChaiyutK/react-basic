function Item(props)
{
    const {data} = props;
    
    return(
        <li className="item">{data.title} <span>{data.amount} บาท</span></li>
    );
}
export default Item;
