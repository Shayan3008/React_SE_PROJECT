import React from 'react'

export default function item(props) {
    return (

        <div className='p-2'>
            <img key={props.items.id} src={props.items.image} className='transition-all  hover:scale-[0.8]' crossOrigin='anonymous' alt='' />
            <h1>{props.items.catId}</h1>
            <p>{props.items.price}</p>
        </div>

    )
}
