import styles from '../ReceiptContainer/receiptContainer.module.css'
import React from 'react'
import  SingleReceipt  from '../SingleReceipt/singleReceipt'


export default function ReceiptContainer({title, picture, data}){


    return (
        <div className={styles["receipts-container"]}>
            <h2 className={styles["h2"]}>{ picture + ' ' + title}</h2>
            <div className={styles["receipts"]}>
               {data.map((receipt, index) => {
                   return <SingleReceipt key={index} img={receipt.img} heading={receipt.name}/>
               })}
            </div>
        </div>
    )
}
