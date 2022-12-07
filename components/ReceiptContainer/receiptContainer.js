import React from 'react'
import  SingleReceipt  from '../SingleReceipt/singleReceipt'


export default function ReceiptContainer({title, picture, data}){


    return (
        <div className="receipts-container">
            <h1 className="h1">{ picture + ' ' + title}</h1>
            <div className="receipts">
               {data.map((receipt, index) => {
                   return <SingleReceipt key={index} img={receipt.img} heading={receipt.name}/>
               })}
            </div>
        </div>
    )
}
