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
               I graduated with a degree in physiotherapy and worked in a government-owned hospital in Greece. In addition to my healthcare background, I have always had a passion for computers and technology. As a hobby, I used to design and create complimentary cards. During the pandemic, I became interested in web development and began learning HTML and CSS to create static websites. As my interest in programming grew, I decided to expand my skillset by learning JavaScript to add interactivity to my website

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