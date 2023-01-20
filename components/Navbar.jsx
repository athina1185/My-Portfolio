import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn, FaBehance,FaRegFileAlt} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#f2f2f2');
  const [linkCol, setLinkCol] = useState('#1f2937');
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/country' ||
      router.asPath === '/dictionary' ||
      router.asPath === '/feedback' ||
      router.asPath === '/guess' ||
      router.asPath === '/login' ||
      router.asPath === '/myspace' ||
      router.asPath === '/portfolio' 
    ) {
       setNavBg('transparent');
       setLinkCol('#f2f2f2');
    } else {
      setNavBg('#f2f2f2');
      setLinkCol('#1f2937');
    }
  },[router]);

  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      }else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow)
  }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}}className={shadow ? "fixed w-full h-20 shadow-xl z-[100] " :"fixed w-full h-20 z-[100] " }>
      <div className="flex justify-between items-center w-full  px-2 2xl:px-16 pt-4">
        <Link href='/'><h1 className="static text-4xl text-transparent font-extrabold -font-burtons bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">&lt;ATHINA CODEs/&gt;</h1></Link>
        <div>
            <ul style={{color: `${linkCol}`}} className="hidden md:flex">
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                </Link>
                <Link href="#about" scroll={false}>
                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                </Link>
                <Link href="#skills" scroll={false}>
                    <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                </Link>
                <Link href="#projects" scroll={false}>
                    <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                </Link>
                <Link href="#contact" scroll={false}>
                    <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
                <AiOutlineMenu size={25} />
            </div>
        </div>
      </div>
      {/* menu overlay */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : " "}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#f2f2f2] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
         <div>
           <div className="flex w-full items-center justify-between">
             <Link href='/'><h1 className="static text-xl text-transparent font-extrabold -font-burtons bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">&lt;ATHINA CODEs/&gt;</h1></Link>
             <div onClick={handleNav}className="rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer">
                <AiOutlineClose />
             </div>
           </div>
           <div className="border-b border-gray-300 my-4">
               <p className="w-[85%] md:w-[90%] py-4">Let's build something cool together</p>
            </div>
         </div>
         <div className="py-4 flex flex-col">
           <ul className="uppercase">
             <Link href="/">
             <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
             </Link>
             <Link href="/#about">
             <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
             </Link>
             <Link href="/#skills">
             <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
             </Link>
             <Link href="/#projects">
             <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
             </Link>
             <Link href="/#contact">
             <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
             </Link>
           </ul>
           <div className="pt-40">
             <p className="uppercase tracking-widest text-indigo-400 font-semibold">Let's Connect</p>
             <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
               <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a href="https://www.linkedin.com/in/athina-oluwafunke-owoeye-6562b6225/"> <FaLinkedinIn /></a>
               </div>
               <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                 <a href="https://github.com/athina1185"><FaGithub /></a>
               </div>
               <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <a href="https://www.behance.net/funkeowoeye/appreciated"><FaBehance /></a>
               </div>
               <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               <a href="https://docs.google.com/document/d/1CmNdixEfAfFThxYjzGv2HhEwd5A4rUo7OeZHbF_xXrY/edit#"><FaRegFileAlt /></a>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;