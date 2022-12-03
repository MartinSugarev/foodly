import React, { useState, useEffect,  memo} from 'react'
import { PopUpWindow } from '../PopUpWindow/PopUpWindow'
import { useNavigate } from 'react-router-dom'
import './singleReceipt.css';



 const SingleReceipt = ({img, heading}) => {

    const [isHidden, setIsHidden] = useState(false);
    let history = useNavigate()
    useEffect(() => {
        
        if(isHidden){
            window.history.pushState({}, '', 'receipt')
        }else{
            history('/')
        }
 
    }, [isHidden])

    return (
        <>
        <div className="single-receipt"  onClick={() => setIsHidden(() => true)} >
            <div className="image-container-receipt">
                <img src={img} alt="receipt-img"/>
            </div>
            <div className="single-receipt-button">
               <h2>{heading}</h2>
                  <div className="btn-container">
                      <button>Pasta</button>
                      <button>Curry</button>
                  </div>
            </div>
        </div>
        {isHidden && <PopUpWindow img={img} heading={heading} setIsHidden={setIsHidden}/>}
        </>
    )
}

export default memo(SingleReceipt)