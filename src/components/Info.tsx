import { motion } from "framer-motion";
import { useApp } from "../AppContext";
import { useEffect } from 'react'
import { AgentType } from "../types";
import { Home } from "../pages/Home";
import { FaArrowLeft } from "react-icons/fa6";
import { LastMatches } from "./LastMatches";

export const Info = () => {

    const { player, agentsData, setCurrentAgent, setPage,setContent } = useApp();

    useEffect(() => {
        const currentAgent = agentsData.find(agent => agent.displayName.toLocaleLowerCase() === findMostPlayedAgent()?.toLocaleLowerCase()) as AgentType

        setCurrentAgent(currentAgent)

    }, [player])

    interface IStringIndex {
        [index: string]: number;
    }

    const findMostPlayedAgent = () => {

        const arr = player.last5Matches.map(match => match.agent);

        const count = {} as IStringIndex;

        for (let index = 0; index < arr.length; index++) {
            count[arr[index]] = (count[arr[index]] || 0) + 1;
        }

        const mostPlayedCount = Math.max(...Object.entries(count).map(item => item[1]))

        const mostPlayedAgent = Object.keys(count).find(key => count[key] === mostPlayedCount);

        return mostPlayedAgent;
    }

    const agentUrl = agentsData.find(agent => agent.displayName.toLocaleLowerCase() === findMostPlayedAgent()?.toLocaleLowerCase())?.displayIcon as string


    return (

        <motion.div
            key="player_info"
            transition={{ ease: 'easeInOut', duration: 0.4, delay: 0.2 }}
            initial={{ opacity: 0, x: 500, }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            className={`w-full h-full flex flex-col justify-center items-center rounded-md border border-[#FFD700] relative`} >
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-10 h-10 flex justify-center items-center border rounded-md border-[#FFD700] text-[#FFD700] absolute top-2 left-2 transition duration-300 hover:bg-[#FFD700] hover:text-[#000]' onClick={() => {
                    setContent(<LastMatches />)
                    setPage(<Home />)
                }}>  <FaArrowLeft /></motion.button >
            <div className="w-20 h-auto sm:w-32 rounded-full overflow-hidden shadow-sm shadow-[#FFD700]">
                <img className="w-full overflow-hidden" src={agentUrl}>
                </img>
            </div>
            <span className="w-2/6 h-1/2 flex justify-center items-center font-semibold text-[#FFD700] text-xl sm:text-2xl">
                {player.username}
            </span>
        </motion.div>

    )
}
