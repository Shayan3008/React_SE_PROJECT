import React from 'react'
import { FaSearch } from 'react-icons/fa'
export default function CategoryList(props: any) {
    const category = props.category
    return (
        <div className=' w-7/12 '>
            <div className='p-4 border'>
                <h1 className='text-blue-400 text-xl mt-1' >Related type</h1>
                <div className='flex  mt-1'>
                    <input className='border w-full p-2' placeholder='Search...' />
                    <button className=' bg-blue-400  min-w-[30px]'><FaSearch color='white' size={10} className=' m-auto ' /></button>
                </div>
                <div className='mt-1 pt-2'>
                    {category.map((e:any) => <div key={e.catId} className='flex justify-between items-center '>
                        <p>{e.name}</p>
                        <input type={'checkbox'}  />
                    </div>)}

                </div>

            </div>
        </div>
    )
}
