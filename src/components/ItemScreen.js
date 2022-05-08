import React from 'react'
import NavBar from './NavBar'
import item from '../models/item'
import Item from './item'
export default function ItemScreen() {
    var arr = [new item(1, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot'), new item(3, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot'),new item(2, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot')]
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-2 gap-5 tablet:grid-cols-3 sm:grid-cols-4 sm:gap-3 '>
                {arr.map((e) => {
                    return <Item items={e}/>
                })}
            </div>
        </>
    )
}
