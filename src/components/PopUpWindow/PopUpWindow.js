import './popUpWindow.css'
import React, { useEffect, useRef} from 'react'
import {IngredientsLink} from '../IngredientsLink/IngredientsLink'

export const PopUpWindow = ({img, heading, setIsHidden}) => {



    let componentRef = useRef()


    useEffect(() => {

      const handleClickOutside = (e) => {

          if(componentRef.current && !componentRef.current.contains(e.target)){    
              setIsHidden(() => false) 
                   
          }
      }
          document.addEventListener('click', (e) => handleClickOutside(e))

    }, [])

    return (
        <div  className= "pop-window-container active">    
        <div ref={componentRef} className="pop-window" >
           <div className="left">
               <div className="single-img-container">
                   <img src={img} alt="logo" />
               </div>
               <div className="ingredients">
                   <h5>Ingredients</h5>
                   <div className="ingredients-container">
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                   </div>
               </div>
           </div>
           <div className="right">
               <h1>{heading}</h1>
               <button> <img src="icon-play.svg" alt="icon-play"/>  play video</button>
               <h5>instructions</h5>
               <p>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.</p>
               <div className="right-btn-container">
                   <button>Pasta</button>
                   <button>Curry</button>
               </div>
           </div>
         </div>
     </div> 
    )
}
