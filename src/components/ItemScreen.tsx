import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import appState from '../context/mainContext'
// import { FaSearch } from 'react-icons/fa'
import Item from './item'

import DropdownComponent from './dropdown'
import { Category } from '../models/Category'
import CategoryList from './CategoryList'
export default function ItemScreen() {
    const arr = useContext(appState)
    const [category, setCategory] = useState<Category[]>([])
    useEffect(() => {
        Category.getData().then((res: Category[]) => !res ? setCategory([]) : setCategory(res))
    }, [])

    return (
        <>
            <NavBar />
            <div className='bg-gray-50 w-screen min-h-[80px] '>
                <div className=' w-10/12 pt-6 m-auto flex flex-col justify-center '>
                    <h1 className='text-2xl'>Category Product</h1>
                    <div className='flex'>
                        <p>home / </p>
                        <p>home / </p>
                        <p>home</p>
                    </div>

                </div>
            </div>
            <div className='w-10/12 m-auto flex  mt-2 p-1'>
                {/* LEFT SIDE LIST OF Categories */}
                <CategoryList category={category} />

                <div className='ml-3 w-full   '>
                    {/* Upper*/}
                    <div className='flex  justify-between w-full  '>
                        <p className='text-2xl font-serif font-bold m-0'>Shopping Products</p>
                        <div className='flex justify-center items-center'>
                            <DropdownComponent />
                        </div>
                    </div>
                    <div className='w-full mt-1'>
                        <div className='grid grid-cols-2 gap-1   sm:grid-cols-3 m-auto  '>
                            {arr.arr.map((e: any) => <Item items={e} favourite={e.favourite} toggleFavourite={arr.toggleFavourite} />)}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
