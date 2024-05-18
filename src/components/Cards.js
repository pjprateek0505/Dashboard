import React from 'react'

const Cards = ({name,info,image,price}) => {
  return (
    <div>
        <div>
            <image src={image} alt=""/>
        </div>
        <div>
            <div>
                <h4>{price}</h4>
                <h4>{name}</h4>
            </div>
            <div>
                <p>{info}</p>
            </div>
        </div>
        <button>
            Interested
        </button>
    </div>
  )
}

export default Cards