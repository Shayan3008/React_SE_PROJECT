import { useState } from 'react'
import React from 'react'
import { FaShoppingCart, FaStream } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
export default function NavBar() {
    const [expand, setexpand] = useState(false)
    const expanded = () => { setexpand(!expand) }
    return (
        <nav className='h-16 flex justify-between w-10/12 m-auto items-center '>
            <h1 className='font-serif text-2xl'>Shopping Store</h1>
            <div className='flex w-4/12 '>
                <input className='border w-full p-2' placeholder='Search...' />
                <button className=' bg-blue-400 min-w-[30px]  w-5'><FaSearch color='white' size={10} className=' m-auto ' /></button>
            </div>
            <FaShoppingCart size={25} />
        </nav>


        // <>
        //     <div className={`absolute left-0 ${expand ? 'w-2/6' : 'w-0'} transition-all  h-screen z-20 bg-blue-500`}>
        //         <div className="absolute right-1 top-2">
        //             <BsXLg />
        //         </div>
        //         <ul className='mt-[100px] list-disc'>
        //             <li className={`mr-6 text-white ${!expand ? 'hidden' : ''} mt-12  ml-2`}>Home</li>
        //             <li className={`mr-6 text-white ${!expand ? 'hidden' : ''} mt-12 ml-2`}>Order</li>
        //         </ul>
        //     </div>
        //     <div className='h-[56px] w-screen bg-red-500 flex justify-between items-center'>
        //         <div>
        //             <h1>LOGO</h1>
        //         </div>
        //         <div >
        //             <ul className='flex'>
        //                 <li className='hidden sm:mr-6 sm:text-white sm:block '>Home</li>
        //                 <li className=' hidden sm:mr-6 sm:text-white sm:block  '>Order</li>
        //                 <li className=' hidden mr-6 text-white mt-1 sm:block '><FaShoppingCart /></li>
        //                 <li className=' hidden sm:mr-6 sm:text-white sm:block  '>Category</li>
        //                 <li className='mr-6 text-white sm:hidden'><button onClick={() => { expanded() }}><FaStream /></button></li>
        //                 <div>
        //                     <li className='mr-6 relative text-white'><FaShoppingCart /></li>
        //                     <div className="rounded-full absolute top-0 z-2 h-[20px] w-[14px] bg-blue-200">
        //                         <p className='text-center'>0</p>
        //                     </div>
        //                 </div>
        //             </ul>
        //         </div>
        //     </div>
        // </>

    )
}
