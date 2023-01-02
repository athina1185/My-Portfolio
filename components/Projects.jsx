import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import countryImg from '../public/assets/projects/country.png'
import dicImg from '../public/assets/projects/dictionary.png'
import feedbackImg from '../public/assets/projects/feedback.png'
import guessImg from '../public/assets/projects/guessgame.png'
import loginImg from '../public/assets/projects/loginform.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import myspaceImg from '../public/assets/projects/myspace.png'
import ProjectInfo from './ProjectInfo';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-indigo-500 text-xl tracking-widest uppercase">
              Projects
          </p>
          <h2 className="py-4">Checkout my projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
              <ProjectInfo title="country's App" image={countryImg} projectUrl="/country"/>
              <ProjectInfo title="Dictionary" image={dicImg} projectUrl="/country"/>
              <ProjectInfo title="Feedback App" image={feedbackImg} projectUrl="/country"/>
              <ProjectInfo title="Guess Game" image={guessImg} projectUrl="/country"/>
              <ProjectInfo title="Login Form" image={loginImg} projectUrl="/country"/>
              <ProjectInfo title="My Space" image={myspaceImg} projectUrl="/country"/>
              <ProjectInfo title="My Portfolio" image={portfolioImg} projectUrl="/country"/>
          </div>
      </div>
    </div>
  )
}

export default Projects