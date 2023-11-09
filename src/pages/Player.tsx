
import { Info } from '../components/Info';
import { motion } from 'framer-motion';
import { ContentBar } from '../components/ContentBar';
import { useApp } from '../AppContext';

export const Player = () => {

  const { content} = useApp();
  
  return (
    <motion.div className='w-full h-full flex flex-col justify-center items-center p-8 gap-4'>
      
      <div className='flex justify-center items-center w-4/5 sm:w-2/5 h-[36%] relative'>
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
