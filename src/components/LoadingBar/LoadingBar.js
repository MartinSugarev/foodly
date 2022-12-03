import './loadingBar.css'

import React from 'react'

export const LoadingBar = () => {
    return (
        <div className="loadingBar-container">
            <div className="img-container-loading">
               <img src={'Ellipse 1.svg'} alt="search-icon" />
               <img src={'Vector2.svg'} alt="vector"/>
            </div>
             <p>Searching for delicious food! <b>Yum! </b>😋</p>
        </div>
    )
}
