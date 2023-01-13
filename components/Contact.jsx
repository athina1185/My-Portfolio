import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaBehance, FaRegFileAlt } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

import ath from '../public/ath-wave.png'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
         <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
       <p className=" text-xl tracking-widest uppercase text-indigo-500">Contact</p>
       <h2 className="py-4">Get In Touch</h2>
       <div className="grid lg:grid-cols-5 gap-8">
   {/* left section */}
      <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-md">
        <div className=" px-2 lg:p-4 h-full">
           <div>
               <Image className="hover:scale-105 ease-in duration-300" src={ath}/>
           </div>
           <div>
               <h2 className="py-2">Athina Owoeye</h2>
               <p>Front-End Developer</p>
           </div>
           <div>
               <div>
                   <p className="pt-8">CONNECT WITH ME</p>
                   <div className="flex items-center justify-between py-4">
                   <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <a href="https://www.linkedin.com/in/athina-oluwafunke-owoeye-6562b6225/"><FaLinkedinIn /></a>
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                         <a href="https://github.com/athina1185"><FaGithub /></a>
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                     <a href="https://www.behance.net/funkeowoeye/appreciated"><FaBehance /></a>
                     </div>
                     <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                     <a href="https://docs.google.com/document/d/1CmNdixEfAfFThxYjzGv2HhEwd5A4rUo7OeZHbF_xXrY/edit#"><FaRegFileAlt /></a>
                     </div>
                   </div>
               </div>
           </div>
        </div>
      </div>

      {/* right section */}
         <div className="col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-md lg:py-4">
             <div className="py-4 px-2">
              <form>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      <div className="flex flex-col">
                          <label className="text-sm py-2  uppercase">Name</label>
                          <input className="rounded-lg border-2 p-3 px-3 flex border-gray-300"type="text" />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-sm py-2  uppercase">Phone Number</label>
                          <input className="rounded-lg border-2 p-3 px-3 flex border-gray-300"type="text" />
                      </div>
                  </div>
                  <div className="flex flex-col py-2">
                          <label className="text-sm py-2  uppercase">Email</label>
                          <input className="rounded-lg border-2 p-3 px-3 flex border-gray-300"type="email" />
                    </div>
                  <div className="flex flex-col py-2">
                          <label className="text-sm py-2  uppercase">Subject</label>
                          <input className="rounded-lg border-2 p-3 px-3 flex border-gray-300"type="text" />
                    </div>
                  <div className="flex flex-col py-2">
                          <label className="text-sm py-2  uppercase">Message</label>
                          <textarea className="border-2 rounded-lg border-gray-300"rows="10"></textarea>
                    </div>
                    <button className="w-full p-4 mt-4 text-gray-200">Send Message</button>
              </form>
             </div> 
         </div>

       </div>
       <div className="flex justify-center py-12">
           <Link href='/'>
               <div className=" rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                   <HiOutlineChevronDoubleUp className=" text-indigo-500" size={30}/>
               </div>
           </Link>
       </div>
     </div>
    </div>
  );
};

export default Contact