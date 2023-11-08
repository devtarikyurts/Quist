
import { Info } from '../components/Info';
import { motion } from 'framer-motion';
import { ContentBar } from '../components/ContentBar';
import { useApp } from '../AppContext';
import { Home } from './Home';
import { FaArrowLeft } from 'react-icons/fa6';

export const Player = () => {

  const { content,setPage} = useApp();
  
  return (
    <motion.div className='w-full h-full flex flex-col justify-center items-center p-8 gap-4'>
      <motion.button
         transition={{ duration: 0.4 }}
         initial={{ opacity: 0,scale:0}}
         animate={{ opacity: 1,scale:1 }}
         exit={{ opacity: 0, scale:0}} 
         className='w-10 h-10 flex justify-center items-center border rounded-md border-[#FFD700] text-[#FFD700] absolute top-2 left-2'  onClick={() => {

          setPage(<Home />)
        }}>  <FaArrowLeft /></motion.button >
      <div className='flex justify-center items-center w-4/5 sm:w-2/5 h-[36%] '>
        <Info />
      </div>
      <div className='flex justify-center items-center w-4/5 sm:w-2/5 h-[6%] '>
        <ContentBar />
      </div>
      <div className='flex justify-center items-center w-4/5 sm:w-2/5 h-[48%] '>
        {content}
      </div>
    </motion.div>
  )
}
