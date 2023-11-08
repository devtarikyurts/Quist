import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '../AppContext'
import { PlayerType, fakeUsers } from '../api/fakeApi'
import { Player } from '../pages/Player'

const fakeLeaderboard = [
    {
       ...fakeUsers[2]
    },
    {
        ...fakeUsers[1]
    },
    {
        ...fakeUsers[0]
    },
    {
        id: 4,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 5,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 6,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 7,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 8,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 9,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
    {
        id: 10,
        username: "tarik",
        rank: "RADIANT",
        rating: 999,
        kd: 1.31,
        totalMatches: {
            played: 99,
            wins: 0,
            losses: 99,
            draws: 0,
        },
        last5Matches: [
            {
                id: 1,
                result: "win",
                roundsWon: 13,
                roundsLost: 6,
                kills: 31,
                assists: 0,
                deaths: 10,
                agent: 'Reyna',
            },
            {
                id: 2,
                result: "win",
                roundsWon: 13,
                roundsLost: 10,
                kills: 38,
                assists: 3,
                deaths: 12,
                agent: 'Raze',
            },
            {
                id: 3,
                result: "lose",
                roundsWon: 6,
                roundsLost: 13,
                kills: 29,
                assists: 6,
                deaths: 14,
                agent: 'Jett',
            },
            {
                id: 4,
                result: "win",
                roundsWon: 13,
                roundsLost: 8,
                kills: 34,
                assists: 0,
                deaths: 0,
                agent: 'Reyna',
            },
            {
                id: 5,
                result: "win",
                roundsWon: 13,
                roundsLost: 9,
                kills: 30,
                assists: 10,
                deaths: 17,
                agent: 'Reyna',
            },
        ],
    },
]

const Top3 = () => {

    const { agentsData, setPlayer, setPage } = useApp();

    const jett = agentsData.find(item => item.displayName.toLocaleLowerCase() === 'jett')?.displayIconSmall


    const handleClick = (player: PlayerType) => {
        setPlayer(player)
        setPage(<Player />)
    }


    return (
        <motion.div

            className='flex justify-center items-end w-4/5 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 h-2/6 gap-4 '>
            <motion.div
                onClick={() => { handleClick(fakeUsers[1]) }}
                whileTap={{ y:-10, backgroundColor: '#C0C0C0', color: 'rgb(24 24 27)' }}
                whileHover={{y:-10,backgroundColor: '#C0C0C0', color: 'rgb(24 24 27)' }}
                transition={{ duration: 0.6 }}
                initial={{ height: 0, backgroundColor: '#C0C0C0' }}
                animate={{ height: '70%', backgroundColor: 'rgb(24 24 27)' }}
                exit={{ height: 0 }}
                className='flex flex-col justify-around pt-2 items-center w-[30%] h-[70%] border text-[#C0C0C0] border-[#C0C0C0] rounded-md hover:cursor-pointer overflow-hidden'>
                {/* <motion.span
                    transition={{ duration: 0.6, delay: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-6 text-2xl'>#2</motion.span> */}
                <motion.span
                    transition={{ duration: 0.6, delay: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }} className='flex justify-center items-center w-full pr-1 pl-1 text-center text-xs sm:text-base md:text-lg'>{fakeLeaderboard[1].username}</motion.span>

                <motion.img
                    transition={{ duration: 0.6, delay: 0.6 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-auto h-1/4 rounded-full ' src={jett} alt="rank" />

                <motion.span
                    transition={{ duration: 0.6, delay: 0.4 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-6'>{fakeLeaderboard[1].rating}</motion.span>
            </motion.div>

            <motion.div
                onClick={() => { handleClick(fakeUsers[2]) }}
                whileTap={{ y:-10, backgroundColor: '#FFD700', color: 'rgb(24 24 27)' }}
                whileHover={{y:-10,backgroundColor: '#FFD700', color: 'rgb(24 24 27)' }}
                transition={{ duration: 0.6 }}
                initial={{ height: 0, backgroundColor: '#FFD700' }}
                animate={{ height: '100%', backgroundColor: 'rgb(24 24 27)' }}
                exit={{ height: 0 }}
                className='flex flex-col justify-between items-center p-1 w-[40%] h-full border text-[#FFD700] border-[#FFD700] rounded-md hover:cursor-pointer overflow-hidden'>
                {/* <motion.span
                    transition={{ duration: 0.6, delay: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-1/4 font-extrabold text-5xl'>#1</motion.span> */}
                <motion.span
                    transition={{ duration: 0.6, delay: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-1/4  pr-1 pl-1 text-center text-xl sm:text-xl'>{fakeLeaderboard[0].username}</motion.span>
                <motion.img
                    transition={{ duration: 0.6, delay: 0.6 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-auto h-1/4 rounded-full ' src={jett} alt="rank" />

                <motion.span
                    transition={{ duration: 0.6, delay: 0.4 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-1/4 text-2xl sm:text-base'>{fakeLeaderboard[0].rating}</motion.span>
            </motion.div>

            <motion.div
                onClick={() => { handleClick(fakeUsers[0]) }}
                whileTap={{ y:-10, backgroundColor: '#CD7F32', color: 'rgb(24 24 27)' }}
                whileHover={{ y:-10, backgroundColor: '#CD7F32', color: 'rgb(24 24 27)' }}
                transition={{ duration: 0.6 }}
                initial={{ height: 0, backgroundColor: '#CD7F32' }}
                animate={{ height: '40%', backgroundColor: 'rgb(24 24 27)' }}
                exit={{ height: 0 }}
                className='flex flex-col justify-between items-center p-1 w-[30%] h-[40%] border text-[#CD7F32] border-[#CD7F32] rounded-md hover:cursor-pointer overflow-hidden'>
                {/* <motion.span
                    transition={{ duration: 0.6, delay: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-6'>#3</motion.span> */}
                <motion.span
                    transition={{ duration: 0.6, delay: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }} className='flex justify-center items-center w-full  pr-1 pl-1 text-center text-xs sm:text-base md:text-lg'>{fakeLeaderboard[2].username}</motion.span>
                <motion.img
                    transition={{ duration: 0.6, delay: 0.6 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-auto h-1/4 rounded-full ' src={jett} alt="rank" />

                <motion.span
                    transition={{ duration: 0.6, delay: 0.4 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className='flex justify-center items-center w-full h-1/4 text-xs sm:text-base md:text-lg'>{fakeLeaderboard[2].rating}</motion.span>
            </motion.div>

        </motion.div>
    )
}

export const Leaderboard = () => {

    return (
        <AnimatePresence>
            <Top3 />
        </AnimatePresence>
    )
}
