import { motion } from "framer-motion";
import { useApp } from "../AppContext";
import { useEffect } from 'react'
import { AgentType, RankType } from "../types";

export const Info = () => {

    const { player, agentsData, ranksData, setCurrentAgent } = useApp();

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
            transition={{ ease:'easeInOut', duration: 0.4, delay: 0.2 }}
            initial={{ opacity: 0, x: 500, }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500}}
            className={`w-full h-full flex flex-col justify-center items-center rounded-md border border-[#FFD700]`} >
            <div className="w-2/6 rounded-full overflow-hidden shadow-sm shadow-[#FFD700]">
                <img className="w-full overflow-hidden" src={agentUrl}>
                </img>
            </div>
            <span className="w-2/6 h-1/2 flex justify-center items-center font-semibold text-[#FFD700] text-xl">
                {player.username}
            </span>
        </motion.div>
 
    )
}
