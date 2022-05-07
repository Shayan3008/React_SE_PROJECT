import React from 'react'
import { useState } from 'react'
import { AnimateGroup, Animate } from 'react-simple-animate'
import { FaEye } from 'react-icons/fa'

export default function Login() {
    const [icon, seticon] = useState(true)
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const [conPass, setconPass] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const showPass = () => { seticon(!icon) }
    const onHandleChange = (e, value) => {
        switch (value) {
            case 'user':
                setUserName(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'conpass':
                setconPass(e.target.value)
                break;
            case 'phone':
                setphone(e.target.value)
                break;
            case 'email':
                setemail(e.target.value)
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex justify-center text-center items-center h-screen 
      w-12/12 bg-[url('./assets/bg-shop.png')] bg-cover bg-no-repeat">
            <div className='flex flex-col w-3/6 mb-30 p-3'>
                <AnimateGroup>
                    <Animate play duration={2} start={{ opacity: 0, transform: "translate(0,-30px)" }}
                        end={{ opacity: 1, transform: "translate(0,0)" }} sequenceIndex={0}>
                        <h1 className=" text-black text-5xl mb-5">This is shop</h1>
                    </Animate>
                    <Animate play duration={4} start={{ opacity: 0 }}
                        end={{ opacity: 1 }} sequenceIndex={1}>
                        <div className="flex-col flex relative">
                            <input type="text" value={userName} onChange={(e) => { onHandleChange(e, 'user') }} className="w-6/6 ml-10 mb-1 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter email" />
                            <input type={icon ? "password" : "text"} value={Password} onChange={(e) => { onHandleChange(e, 'password') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter password" />
                            <button className='absolute right-4 bottom-[140px] mb-1' onClick={showPass}><FaEye /></button>
                            <input type={icon ? "password" : "text"} value={conPass} onChange={(e) => { onHandleChange(e, 'conpass') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter password" />
                            <button className='absolute right-4 bottom-[95px]' onClick={showPass}><FaEye /></button>
                            <input type="text" value={phone} onChange={(e) => { onHandleChange(e, 'phone') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter Phone" />
                            <input type="text" value={email} onChange={(e) => { onHandleChange(e, 'email') }} className="w-6/6 mb-1 ml-10 h-10 rounded-md  hover:bg-gray-100" placeholder="Enter Email" />
                        </div>
                        <button className="w-2/6 rounded-3xl m-auto bg-blue-300 mt-4 p-1">Signup</button>
                        <p>Already have an account??</p>
                    </Animate>
                </AnimateGroup>

                {/* <button className="w-2/6 rounded-3xl m-auto bg-blue-300  p-1">Login</button> */}
            </div>

        </div>
    )
}
