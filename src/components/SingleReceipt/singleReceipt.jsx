import styles from '../SingleReceipt/singleReceipt.module.css'
import React, { useState, useEffect} from 'react'
import  PopUpWindow  from '../PopUpWindow/popUpWindow'




 export default function SingleReceipt({img, heading}){

    const [isHidden, setIsHidden] = useState(false);


    useEffect(() => {
        
        if(isHidden){
            window.history.pushState({}, '', 'receipt')
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            }) 
        }else {

        }
 
    }, [isHidden])


    const openReceipt = (e) => {
        setIsHidden(() => true)
        e.stopPropagation()
    }

    return (
        <>
        <div className={styles["single-receipt"]}  onClick={(e) => openReceipt(e)} >
            <div className={styles["image-container-receipt"]}>
                <img  src={img} alt="receipt-img"/>
            </div>
            <div className={styles["single-receipt-button"]}>
               <h2>{heading}</h2>
                  <div className={styles["button-container"]}>
                      <button>Pasta</button>
                      <button>Curry</button>
                  </div>
            </div>
        </div>
        {isHidden && <PopUpWindow img={img} heading={heading} setIsHidden={setIsHidden}/>}
        </>
    )
}

