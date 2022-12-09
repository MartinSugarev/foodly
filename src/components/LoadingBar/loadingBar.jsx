import styles from '../LoadingBar/loadingBar.module.css'
import React from 'react'

export default function LoadingBar(){
    return (
        <div className={styles["loadingBar-container"]}>
            <div className={styles["img-container-loading"]}>
               <img src={'Ellipse 1.svg'} alt="search-icon" />
               <img src={'Vector2.svg'} alt="vector"/>
            </div>
             <p>Searching for delicious food! <b>Yum! </b>😋</p>
        </div>
    )
}
