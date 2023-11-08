import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { FaClockRotateLeft, FaCrosshairs } from 'react-icons/fa6'
import { useApp } from '../AppContext'
import { LastMatches } from './LastMatches'
import { Statistics } from './Statistics'
import Teammates from './Teammates'
import { motion } from 'framer-motion'

export const ContentBar = () => {

    const { setContent } = useApp();

    const handleClick = (content: JSX.Element) => {
        setContent(content)
    }

    return (
        <motion.div
            key="content_bar"
            transition={{ ease:'easeInOut', duration: 0.6, delay: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className='w-full h-full flex justify-center items-center border rounded-md text-[#FFD700] border-[#FFD700] hover:cursor-pointer'>
            <div className='flex justify-center items-center border-r border-[#FFD700] w-1/3 h-full transition hover:bg-[#FFD700] hover:text-[#000]' onClick={() => handleClick(<LastMatches />)}><FaClockRotateLeft /></div>
            <div className='flex justify-center items-center border-r border-[#FFD700] w-1/3 h-full transition hover:bg-[#FFD700] hover:text-[#000]' onClick={() => handleClick(<Statistics />)}><FaCrosshairs /></div>
            <div className='flex justify-center items-center w-1/3 h-full text-lg transition hover:bg-[#FFD700] hover:text-[#000]' onClick={() => handleClick(<Teammates />)}><FaUserFriends /> </div>

        </motion.div>
    )
}
