import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Fresh Fruits ecommerce Website",
      description: "This is a responsive React-based online store for browsing and purchasing fresh fruits. Features include product listings, a shopping cart, and smooth checkout—styled with Tailwind CSS.",
      links: {
        site: "https://fresh-fruits-ecommerce-website.vercel.app/",
        github: "https://github.com/SimeonJay/Fresh-fruits-ecommerce-website.git",
      },
    },
    {
      img: project2,
      title: "Crypto Tracking Website",
      description: 'The Crypto Tracking Website is user-friendly platform that delivers real-time data on cryptocurrencies, helping users track market trends and key stats with ease.',
      links: {
        site: "https://crypto-tracking-website.vercel.app/",
        github: "https://github.com/SimeonJay/crypto-tracking-website",
      },
    },
    {
      img: project3,
      title: "Ecommerce shopping cart",
      description: "A responsive online store built with React and Tailwind CSS, offering a range of products from electronics to fashion. Features include product browsing, a shopping cart, and a streamlined checkout process.",
      links: {
        site: "https://e-commerce-store-silk.vercel.app/",
        github: "https://github.com/SimeonJay/e-commerce-store",
      },
    },
    {
      img: project4,
      title: "React Calculator App",
      description: "A simple, responsive calculator built with React and Next.js. Supports basic operations, keyboard input, and dark mode, styled with Tailwind CSS.",
      links: {
        site: "https://react-calculator-appp-d75l-lgunhmyv8-simeonjays-projects.vercel.app/",
        github: "https://github.com/SimeonJay/react-calculator-appp",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
