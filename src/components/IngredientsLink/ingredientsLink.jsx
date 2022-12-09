import styles from '../IngredientsLink/ingredientsLink.module.css'
import React from 'react'


export default function IngredientsLink (){
    return (
        <div className={styles["ingredientLink_container"]}>
                <img src="hand.svg" alt="hand-logo"/>
                <p>penne rigate</p>
        </div>
    )
}
