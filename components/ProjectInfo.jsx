import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectInfo = ({title, image, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-md py-4 group hover:bg-gradient-to-r from bg-gray-300 to-indigo-400">
                  <Image className=" rounded-md group-hover:opacity-10"src={image} />
                  <div className="hidden absolute group-hover:block  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <h3 className="text-white text-2xl tracking-wider text-center">{title}</h3>
                      <p className="text-white text-center pb-4 pt-2">React Js</p>
                      <Link href={projectUrl}>
                         <p className="bg-white text-center text-gray-600 font-bold text-lg rounded-md cursor-pointer">More Info</p>
                      </Link>
                  </div>
              </div>
  )
}

export default ProjectInfo