import styles from '../EmptyContainer/emptyContainer.module.css'
import React from 'react'

export default function EmptyContainer({search, clearInput}){
    return (
        <div className={styles["empty-container"]}>
            <p>No results found for "{search}". <b>How about some burgers?</b></p>
            <button onClick={() => clearInput()} className={styles["empty-button"]}>Yeah, sure</button>
        </div>
    )
}
