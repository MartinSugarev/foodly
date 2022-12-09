import styles from '../Home/home.module.css'
import React from 'react'
import  ReceiptContainer  from '../ReceiptContainer/receiptContainer'
import {dataSea, dataItalian} from '../../../utils/mockedData'

export default function Home(){
    return (
        <div className={styles['home-container']}>
            <ReceiptContainer title={'down for sea food tonight?'} picture={'🌊'} data={dataSea} />
            <ReceiptContainer title={'maybe some italian?'}  picture={'🍝'} data={dataItalian} />
        </div>
    )
}
