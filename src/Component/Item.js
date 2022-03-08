import PropTypes from 'prop-types';

function Item(props)
{
    const {title,amount} = props;
    
    return(
        <li className="item">{title} <span>{amount} บาท</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string,
    amount:PropTypes.number
}
export default Item;
