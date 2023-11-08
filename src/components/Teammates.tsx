import { motion } from 'framer-motion'
import { useApp } from '../AppContext'
import { v4 as uuidv4 } from 'uuid';
import { FaClock} from 'react-icons/fa';
import { FaCircleCheck, FaHeart, FaPercent } from 'react-icons/fa6';


const Teammates = () => {

    const { player } = useApp();

    let currentTeammates = player.teammates;

    if (currentTeammates.length < 5) {
        for (let index = 0; index < 5 - currentTeammates.length; index++) {
            const element = {
                id: uuidv4(),
                username: `${'random' + index}`,
                playTime: 0,
                playedMatches: 0,
                win: 0,
                draw: 0,
                lose: 0,
            }
            currentTeammates.push(element as unknown as typeof player.teammates[0])
        }
    }


    const teammates = currentTeammates.map(teammate => {

        if (teammate.username.includes('random'))
            return (
                <motion.li
                    key={teammate.id}
                    className={`flex h-1/5 justify-center items-center font-semibold rounded-md opacity-10`}>
                    <motion.div
                      whileHover={{x: 5}} 
                        whileTap={{ scale: 0.95 }}
                        className={`w-full h-full flex justify-around p-2 items-center relative text-[#FFD700] border border-[#FFD700] hover:cursor-pointer rounded-md`}>
                        <span className="flex w-1/4 justify-center items-center "> </span>
                        <span className="flex w-1/4 justify-center items-center"> </span>
                        <span className="flex w-1/4 justify-center items-center"> </span>
                        <span className={`flex w-1/4 justify-center items-center`}></span>
                    </motion.div>
                </motion.li>
            )

        return (
            <motion.li
                key={teammate.id}
                className={`h-1/5 flex justify-between items-center font-semibold rounded-md`}

            >
                <motion.div
                  whileHover={{x: 5}} 
                    whileTap={{ scale: 0.95 }}
                    className={`w-full h-full flex justify-around p-2 items-center relative text-[#FFD700] border border-[#FFD700] hover:cursor-pointer rounded-md`}>
                    <motion.span
                     transition={{ duration: 0.6, delay: 0.4  }}
                     initial={{ opacity: 0, scale: 0, x: 100 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0, x:100 }}  
                    className="flex w-1/4 justify-center items-center pr-1 pl-1 text-center text-xs sm:text-base md:text-lg">{teammate.username} </motion.span>
                    <motion.span 
                     transition={{ duration: 0.6, delay: 0.3  }}
                     initial={{ opacity: 0, scale: 0, x: 100 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0, x:100 }} 
                    className="flex w-1/4 justify-center items-center">{teammate.playTime} </motion.span>
                    <motion.span
                     transition={{ duration: 0.6, delay: 0.2  }}
                     initial={{ opacity: 0, scale: 0, x: 100 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0, x:100 }}  
                    className="flex w-1/4 justify-center items-center">{teammate.playedMatches} </motion.span>
                    <motion.span
                     transition={{ duration: 0.6, delay: 0.1  }}
                     initial={{ opacity: 0, scale: 0, x: 100 }}
                     animate={{ opacity: 1, scale: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0, x:100 }}  
                    className={`flex w-1/4 justify-center items-center`}>{`${Math.floor(teammate.win / teammate.lose)}%`}</motion.span>
                </motion.div>

            </motion.li>
        )
    })

    return (
            <motion.div
                key="last_matches"
                transition={{ ease: 'easeInOut', duration: 0.4 }}
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 500 }}
                className='w-full h-full flex flex-col justify-center items-center rounded-md gap-2'>
                <div className='w-full h-1/6 flex justify-between p-4 items-center text-black bg-[#FFD700] font-semibold rounded-md border-b-0'>
                    <span className="flex w-1/4 justify-center items-center"><FaHeart /> </span>
                    <span className="flex w-1/4 justify-center items-center"><FaClock /> </span>
                    <span className="flex w-1/4 justify-center items-center"><FaCircleCheck /> </span>
                    <span className="flex w-1/4 justify-center items-center"><FaPercent /></span>
                </div>
                <ul className='w-full h-5/6 flex flex-col gap-2'>{teammates}</ul>
            </motion.div>
    )
}

export default Teammates