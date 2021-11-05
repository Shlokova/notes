import React from 'react'
import CardItems from './CardItems'
const CardList = ({notes, remove}) => {
    return (
        <div className = 'card-list'>
            {
        notes.map((item, index) => 
          <CardItems note = {item} key = {index} number={index + 1} remove = {remove}/>
        ) 
      }
        </div>
    )
}

export default CardList
