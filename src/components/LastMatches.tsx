import { RiTriangleFill } from "react-icons/ri";
import { useApp } from "../AppContext";
import { AnimatePresence, motion, useAnimationControls, useTime, useTransform } from "framer-motion"
import { Home } from "../pages/Home";
import { Match } from "./Match";
import { useEffect } from "react";


export const LastMatches = () => {

    const { player, agentsData,setPage, setModal, modal} = useApp();

    const controls = useAnimationControls()
  
    useEffect(() => {
      controls.start({ opacity: 1, x: 0 })
    }, [modal])


    const matches = player.last5Matches.map(match => {

        return (
            <motion.li
                key={match.id}

                className={`flex h-1/5 justify-between font-semibold p-2 items-center relative text-[#FFD700] border border-[#FFD700]  transition duration-700 ${match.result === 'win' ? 'hover:border-emerald-800' : 'hover:border-rose-800'} hover:cursor-pointer rounded-md`}
            >
                <motion.div
                whileHover={{x: 5}} 
                whileTap={{ scale: 0.95 }}
                onClick={() => {setPage(<Match />)}} 
                className="flex flex-1 h-full">
                    <motion.img
                        transition={{ duration: 0.6, delay: 0.1 }}
                        initial={{ opacity: 0, scale: 0, x: -100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x:-100 }}
                        className="flex w-auto m-auto h-full  justify-center items-center rounded-full" src={agentsData.find(agent => agent.displayName.toLocaleLowerCase().includes(match.agent.toLocaleLowerCase()))?.displayIcon} />
                    <motion.span
                    transition={{ duration: 0.6, delay: 0.2 }}
                    initial={{ opacity: 0, scale: 0, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x:-100 }} 
                    className="flex w-1/5 justify-center items-center">{match.kills} </motion.span>
                    <motion.span
                    transition={{ duration: 0.6, delay: 0.3 }}
                    initial={{ opacity: 0, scale: 0, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x:-100 }}  
                    className="flex w-1/5 justify-center items-center">{match.assists} </motion.span>
                    <motion.span 
                    transition={{ duration: 0.6, delay: 0.4 }}
                    initial={{ opacity: 0, scale: 0, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x:-100 }} 
                    className="flex w-1/5 justify-center items-center">{match.deaths} </motion.span>
                    <motion.span
                    transition={{ duration: 0.6, delay: 0.5  }}
                    initial={{ opacity: 0, scale: 0, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0, x:-100 }}  
                    className={`flex w-1/5 justify-center items-center ${match.result === 'win' ? 'text-green-500' : 'text-red-500'}`}>{match.roundsWon + ' / ' + match.roundsLost}</motion.span>
                </motion.div>


            </motion.li>
        )
    })

    return (
            <motion.div
                key="last_matches"
                transition={{ ease: 'easeInOut', duration: 0.4 }}
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                exit={{ opacity: 0, x: -500 }}
                className='w-full h-full flex flex-col justify-center items-center rounded-md gap-2'>
                <div className='w-full h-1/6 flex justify-between p-4 items-center text-black bg-[#FFD700] font-semibold rounded-md border-b-0'>
                    <motion.span className="flex w-1/5 justify-center items-center"><RiTriangleFill /></motion.span>
                    <span className="flex w-1/5 justify-center items-center">K</span>
                    <span className="flex w-1/5 justify-center items-center">A</span>
                    <span className="flex w-1/5 justify-center items-center">D</span>
                    <span className="flex w-1/5 justify-center items-center">Score</span>
                </div>
                <ul className='w-full h-5/6 flex flex-col gap-2'>{matches}</ul>
            </motion.div>
    )
}
