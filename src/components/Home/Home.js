import React from 'react'
import './home.css'
import { ReceiptContainer } from '../ReceiptContainer/ReceiptContainer'
import {dataSea, dataItalian} from '../../mockedData'

export const Home = () => {
    return (
        <div className="home-container">
            <ReceiptContainer title={'down for sea food tonight?'} picture={'🌊'} data={dataSea} />
            <ReceiptContainer title={'maybe some italian?'}  picture={'🍝'} data={dataItalian} />
        </div>
    )
}
