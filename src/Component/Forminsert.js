import React from 'react'
import { useState } from 'react';

const Forminsert = (props) => {
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveData = (event)=>{
        event.preventDefault()
        const newItem = {
            title:title,
            amount:Number(amount)
        }
        props.insertItem(newItem)
        console.log(newItem)
    }
  return (
    <div>
        <form onSubmit={saveData}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" onChange={inputTitle} placeholder='กรุณากรอกชื่อรายการ' />
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" onChange={inputAmount} placeholder='กรุณากรอกจำนวนเงิน' />
            </div>
            <div className="form-submit">
                <button type="submit">บันทึก</button>
            </div>
        </form>
    </div>
  )
}

export default Forminsert