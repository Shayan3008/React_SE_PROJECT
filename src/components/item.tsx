import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default function item(props: any) {
    return (
        <div key={props.items.id} className='p-1 border'>
            <div className='relative'>
                <img className='min-h-[150px]' src={props.items.image} crossOrigin='anonymous' alt='' />
                <p className='w-full absolute bottom-0 m-0 text-white font-extrabold bg-black text-center  hover:block'>Click for details</p>
            </div>

            <p className='p-0 m-0 text-xl'>A beautiful red Shoes perfect for jogging</p>
            <div className="flex justify-between mt-1">
                <p className='text-sm font-bold'>${props.items.price}</p>
                {props.favourite ? <FaHeart onClick={() => { props.toggleFavourite(props.items.id) }} className='mt-1' /> : <FaRegHeart onClick={() => { props.toggleFavourite(props.items.id) }} className='mt-1' />}
            </div>
            <button className='btn btn-primary w-full'>Add to Cart</button>
        </div>
    )
}