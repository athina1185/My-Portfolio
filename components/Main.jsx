import React from 'react'
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id ="home"className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                {/* <p className="uppercase text-sm tracking-widest text-gray-500">let's build something Cool together</p> */}
                <h1 className="text-gray-700">
                Hello, I'm  <span className=" text-indigo-500">Athina</span>
                </h1>
                <h1 className="text-gray-700 py-2">
                    <Typewriter 
                        options = {{
                           strings: [
                               "A web Developer ",
                               " A Designer "
                           ],
                           changeDelay: 3,
                           changeDeleteSpeed: 2,
                           autoStart: true,
                           loop: true,

                        }} />
                    </h1>
                <p>
                I enjoy building and designing scalable products with great user experience
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <FaLinkedinIn />
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <FaGithub />
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <AiOutlineMail />
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <BsFillPersonFill/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main