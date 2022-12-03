import './emptyContainer.css'
import React from 'react'

export const EmptyContainer = ({search, clearInput}) => {
    return (
        <div className="empty-container">
            <p>No results found for "{search}". <b>How about some burgers?</b></p>
            <button onClick={() => clearInput()} className="empty-button">Yeah, sure</button>
        </div>
    )
}
