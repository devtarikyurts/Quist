import { useApp } from "../AppContext";
import { AnimatePresence, motion } from "framer-motion"

export const Statistics = () => {

    const { } = useApp();



    return (
        <motion.div
            key="statistics"
            transition={{ ease:'easeInOut', duration: 0.4,}}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300}}
            className='w-full h-full flex justify-center items-center rounded-md border border-[#FFD700]'>
          
        </motion.div>
    )
}
