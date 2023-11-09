import { FaUserFriends } from 'react-icons/fa'
import { FaClockRotateLeft, FaCrosshairs } from 'react-icons/fa6'
import { useApp } from '../AppContext'
import { LastMatches } from './LastMatches'
import { Statistics } from './Statistics'
import Teammates from './Teammates'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const ContentBar = () => {

    const { setContent} = useApp();
    const [active, setActive] = useState('LastMatches')

    const handleClick = (content: JSX.Element, contentName: string) => {
        setContent(content)
        setActive(contentName)
    }

    return (
        <motion.div
            key="content_bar"
            transition={{ ease:'easeInOut', duration: 0.6, delay: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className='w-full h-full flex justify-center items-center border rounded-md text-[#FFD700] border-[#FFD700] hover:cursor-pointer'>
            <div className={`flex justify-center items-center border-r ${active === 'LastMatches' ? 'bg-[#FFD700] text-black' : 'bg-none'} border-[#FFD700] w-1/3 h-full transition hover:bg-[#FFD700] hover:text-[#000]`} onClick={() => handleClick(<LastMatches />, 'LastMatches')}><FaClockRotateLeft /></div>
            <div className={`flex justify-center items-center border-r ${active === 'Statistics' ? 'bg-[#FFD700] text-black' : 'bg-none'} border-[#FFD700] w-1/3 h-full transition hover:bg-[#FFD700] hover:text-[#000]`} onClick={() => handleClick(<Statistics />, 'Statistics')}><FaCrosshairs /></div>
            <div className={`flex justify-center items-center border-r ${active === 'Teammates' ? 'bg-[#FFD700] text-black' : 'bg-none'} border-[#FFD700] w-1/3 h-full transition hover:bg-[#FFD700] hover:text-[#000]`} onClick={() => handleClick(<Teammates />, 'Teammates')}><FaUserFriends /> </div>

        </motion.div>
    )
}
