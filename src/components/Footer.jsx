import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Frontend<span className='text-gray-400'>DEV</span></h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/SimeonJay"><FaGithubSquare /></a>
                <a href="https://x.com/JayBlac65393270"><FaXTwitter /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2024 Simeon John</p>
        
    </div>
  )
}

export default Footer