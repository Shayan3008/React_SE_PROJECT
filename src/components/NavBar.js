import {React,useState} from 'react'
import { FaShoppingCart,FaStream } from 'react-icons/fa'
import {BsXLg} from 'react-icons/bs'
export default function NavBar() {
    const [expand, setexpand] = useState(false)
    const expanded = ()=>{setexpand(!expand)}
    return (
        <>
            <div className={`absolute left-0 ${expand?'w-2/6':'w-0'} transition-all  h-screen z-20 bg-blue-500`}>
                <div className="absolute right-1 top-2">
                    <BsXLg/>
                </div>
                <ul className='mt-[100px] list-disc'>
                    <li className={`mr-6 text-white ${!expand?'hidden':''} mt-12  ml-2`}>Home</li>
                    <li className={`mr-6 text-white ${!expand?'hidden':''} mt-12 ml-2`}>Order</li>
                </ul>
            </div>
            <div className='h-[56px] w-screen bg-red-500 flex justify-between items-center'>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div >
                    <ul className='flex'>
                        <li className='hidden sm:mr-6 sm:text-white sm:block '>Home</li>
                        <li className=' hidden sm:mr-6 sm:text-white sm:block  '>Order</li>
                        <li className=' hidden mr-6 text-white mt-1 sm:block '><FaShoppingCart /></li>
                        <li className=' hidden sm:mr-6 sm:text-white sm:block  '>Category</li>
                        <li className='mr-6 text-white sm:hidden'><button onClick={()=>{expanded()}}><FaStream/></button></li>
                    </ul>
                </div>
            </div>
        </>

    )
}
