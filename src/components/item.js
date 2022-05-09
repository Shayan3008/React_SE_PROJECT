import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
export default function item(props) {
    return (
        <div key={props.items.id} className='p-2'>
            <img src={props.items.image} className='transition-all  hover:scale-[0.8]' crossOrigin='anonymous' alt='' />
            <h1>{props.items.catId}</h1>
            <div className="flex justify-between">
                <p>{props.items.price}</p>
                {props.favourite ? <FaHeart onClick={()=>{props.toggleFavourite(props.items.id)}} className='mt-1' /> : <FaRegHeart onClick={()=>{props.toggleFavourite(props.items.id)}} className='mt-1' />}
            </div>
        </div>
    )
}
