import React, { useContext } from 'react'
import NavBar from './NavBar'
import appState from '../context/mainContext'
import Item from './item'
export default function ItemScreen() {
    const arr = useContext(appState)
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-2 gap-5  sm:grid-cols-4 sm:gap-3 '>
                {arr.arr.map((e) => <Item items={e} favourite={e.favourite} toggleFavourite={arr.toggleFavourite} />)}
            </div>
        </>
    )
}
