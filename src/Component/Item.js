import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Item(props)
{
    const {title,amount,id} = props;
    let status = "";
    const checkStatus = (amount) =>{
        if(amount >0)
        {
            status = "income";
        }
        else if(amount < 0){
            status = "expenses";     
        }
        return status;
    }
    const deleteButton = (event)=>{
        props.deleteButton(event.target.id)
    }
    status = checkStatus(amount);
    return(
        <li className={status}>{title} <span>{amount} บาท</span><button type='button' id={id} onClick={deleteButton}>ลบ</button></li>
    );
}

Item.propTypes={
    title:PropTypes.string,
    amount:PropTypes.number
}
export default Item;
