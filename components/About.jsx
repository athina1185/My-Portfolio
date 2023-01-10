import React from 'react';
import Image from 'next/image';
import ath from '../public/ath-wave.png';

const About = () => {
  return (
    <div id="about"className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
               <h2>So, who am i?</h2>
               <p className="text-gray-600 py-2">I am your unusual developer!</p>
               <p className="-tracking-wide ">
               I have a degree in physiotherapy, which after graduation i worked in a government owned hospital in Greece. I have always been passionate about computers and technology as a whole , i remember how i use to design and make complimentary cards for people just for fun. 
               During the pandemic, i started working with HTML and CSS to make static websites. Intrigued with how programming can be, i was excited to learn more. I started learning javascript to add interactivity to websites. I am currently spending my time building projects,and learning new technologies.

               </p>
            </div>
            <div className="flex items-center justify-center hover:scale-105 ease-in duration-300 py-4">
            <Image src={ath} />
            </div>
        </div>
    </div>
  )
}

export default About