import React from 'react'
import './receiptContainer.css';
import  SingleReceipt  from '../SingleReceipt/SingleReceipt'

export const ReceiptContainer = ({title, picture, data}) => {


    return (
        <div className="receipts-container">
            <h1>{ picture + ' ' + title}</h1>
            <div className="receipts">
               {data.map((receipt, index) => {
                   return <SingleReceipt key={index} img={receipt.img} heading={receipt.name}/>
               })}
            </div>
        </div>
    )
}
