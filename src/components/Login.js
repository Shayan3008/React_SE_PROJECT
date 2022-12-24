import React from 'react'
import { useState } from 'react'
import { AnimateGroup, Animate } from 'react-simple-animate'
import { FaEye } from 'react-icons/fa'
import Background from '../assets/bg-shop.png'
export default function Login() {
    const [icon, seticon] = useState(true)
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')

    const onHandleChange = (e, value) => {
        switch (value) {
            case 'user':
                setUserName(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }
    return (
        <div className='h-screen'>
            <div className='flex h-full'>
                <div className="h-full">
                    <img className='h-full' src={Background}></img>
                </div>
                <div className='container w-full flex justify-center items-center '>
                    <div className='text-center flex flex-col w-7/12'>
                        <h1 className='font-bold text-3xl p-2'>Shopping Store</h1>
                        <input onChange={(e)=>{
                            onHandleChange(e,'user')
                        }} value={userName} className='p-2 mt-2' placeholder='Enter User Name' />
                        <input onChange={(e)=>{
                            onHandleChange(e,'password')
                        }} value={Password} className='p-2 mt-2 border-black' placeholder='Enter Password' />

                        <button className='bg-blue-400 w-6/12 m-auto text-white font-bold text-base rounded mt-2 p-2'>submit</button>
                        <p>Dont have an account? Sign Up</p>
                    </div>

                </div>
            </div>
        </div>

        //     <div className="flex justify-center text-center items-center h-screen 
        //   w-12/12 bg-[url('./assets/bg-shop.png')] bg-cover bg-no-repeat">
        //         <div className='flex flex-col w-3/6 mb-30 p-3'>
        //             <AnimateGroup>
        //                 <Animate play duration={2} start={{ opacity: 0, transform: "translate(0,-30px)" }}
        //                     end={{ opacity: 1, transform: "translate(0,0)" }} sequenceIndex={0}>
        //                     <h1 className=" text-black text-5xl mb-5">This is shop</h1>
        //                 </Animate>
        //                 <Animate play duration={4} start={{ opacity: 0 }}
        //                     end={{ opacity: 1 }} sequenceIndex={1}>
        //                     <div className="flex-col flex relative">
        //                         <input type="text" value={userName} onChange={(e) => { onHandleChange(e, 'user') }} className="w-6/6 ml-10 mb-1 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter email" />

        //                         <input type={icon ? "password" : "text"} value={Password} className="w-6/6 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter password" />
        //                         <button className='absolute right-4 bottom-2' onClick={
        //                             () => {
        //                                 seticon(!icon)
        //                             }
        //                         }><FaEye /></button>
        //                     </div>
        //                     <button className="w-2/6 rounded-3xl m-auto bg-blue-300 mt-4 p-1">Login</button>
        //                     <p className="text-black p-3">forgot Password</p>
        //                 </Animate>
        //             </AnimateGroup>

        //             {/* <button className="w-2/6 rounded-3xl m-auto bg-blue-300  p-1">Login</button> */}
        //         </div>

        //     </div>
    )
}
