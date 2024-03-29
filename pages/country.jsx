import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaCircle} from 'react-icons/fa'
import countryimg from '../public/assets/projects/country.png'

const country = () => {
  return (
    <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="w-full h-[30vh] lg:h-[40vh] absolute top-0 left-0 bg-black/80 z-10"></div>
            <Image className="absolute z-1" layout="fill" objectFit="cover" src={countryimg}/>
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
                <h2 className="py-2">Country's App</h2>
                {/* <h3>React, React Hooks, RESTAPI</h3> */}
            </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
              <h2>Overview</h2>
              <p>This is a country list of the world, where users can view each country detail as well as select and unselect favourite countrty.</p>
              <button className="px-8 py-2 mt-4">Demo</button>
              <a href="https://github.com/athina1185/isafs2-frontend-project"><button className="px-8 py-2 ml-8 mt-4">Code</button></a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-lg py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="py-2 flex items-center justify-center text-gray-600"><FaCircle className="pr-1"/>React </p>
                  <p className="py-2 flex items-center justify-center text-gray-600"><FaCircle className="pr-1"/>Redux </p>
                  <p className="py-2 flex items-center justify-center text-gray-600"><FaCircle className="pr-1"/>REST API </p>
                  <p className="py-2 flex items-center justify-center text-gray-600"><FaCircle className="pr-1"/>React Hooks </p>
                </div>
            </div>
          </div>
          <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>

    </div>
  );
};

export default country