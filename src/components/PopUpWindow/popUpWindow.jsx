import styles from '../PopUpWindow/popWindow.module.css'
import React, { useEffect, useRef, } from 'react'
import IngredientsLink from '../IngredientsLink/ingredientsLink'


export default function PopUpWindow ({img, heading, setIsHidden}){


    const componentRef = useRef()

    
    useEffect(() => {

      const handleClickOutside = (e) => {
  
          if(componentRef.current && !componentRef.current.contains(e.target)){    
              setIsHidden(() => false) 
              window.history.back()
          }
      }
          document.addEventListener('click', function(e){
               handleClickOutside(e)
          })

          return () => {
              document.removeEventListener('click', (e) => handleClickOutside(e))
          }

    }, [])

    return (
        <div className={styles["pop-window-container active"]}>    
        <div ref={componentRef} className={styles["pop-window"]} >
          
               <div className={styles["single-img-container"]}>
                   <img className={styles["img"]} src={img} alt="logo" />
               </div>
               <div className={styles["ingredients"]}>
                   <h5 className={styles["h5"]}>Ingredients</h5>
                   <div className={styles["ingredients-container"]}>
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                        <IngredientsLink />
                   </div>
               
           </div>
            <div className={styles["right-top"]}>

               <h1 className={styles["h1"]}>{heading}</h1>
               <button className={styles["small-button"]}> <img src="icon-play.svg" alt="icon-play"/>  play video</button>
            </div>
            <div className={styles["bottom-right"]}>

               <h5 className={styles["h5"]}>instructions</h5>
               <p>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</p>
               <div className={styles["right-btn-container"]}>
                   <button className={styles["big-button"]}>Pasta</button>
                   <button className={styles["big-button"]}>Curry</button>
               </div>
            </div>
        
         </div>
     </div> 
    )
}
