import React from 'react';
import Image from 'next/image';
import html from '../public/assets/html.png'
import css3 from '../public/assets/css3.png'
import javascript from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import mongodb from '../public/assets/mongodb.png'
import tailwind from '../public/assets/tailwind-css.png'
import nodejs from '../public/assets/node-js.png'
import git from '../public/assets/git.png'
import figma from '../public/assets/figma.png'
import java from '../public/assets/java.png'
import ruby from '../public/assets/ruby.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen py-2 px-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
           <p className="text-indigo-500 text-xl tracking-widest uppercase">Skills</p>
           <h2 className="py-4">What I Do</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           
           
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={html} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>HTML</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={css3} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>CSS</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={javascript} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>javascript</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={react} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>React</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={git} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Git</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={tailwind} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Tailwind-Css</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={mongodb} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Mongodb</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={nodejs} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Node.js</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={java} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Java</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={figma} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Figma</h3>
                </div>
           </div>
           </div>
           <div className="p-6 shadow-md rounded-md hover:scale-105 ease-in duration-300">
           <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ruby} />
                </div>
                <div className="flex flex-col items-center justify-center">
                   <h3>Ruby</h3>
                </div>
           </div>
           </div>


           </div>
        </div>
    </div>
  )
}

export default Skills