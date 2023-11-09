import { AnimatePresence, motion } from 'framer-motion'
import { TeamType, team1, team2 } from '../api/fakeApi'
import { useApp } from '../AppContext'
import { Player } from '../pages/Player'
import { FaArrowLeft } from 'react-icons/fa6'

export const Match = () => {

  const { agentsData, setPage } = useApp()



  const renderTeams = (team: TeamType) => {
    return team.map(player => {
      return (

        <motion.li key={player.id} className='w-full h-1/5 pt-1 pb-1 flex justify-center items-center text-[#FFD700] border border-[#FFD700]  transition duration-700 hover:cursor-pointer rounded-md text-center text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] whitespace-normal'>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-1 h-full">
            <motion.img
              transition={{ duration: 0.6, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }} className="flex w-auto m-auto h-8 xl:h-10 mr-2 ml-2 xl:mr-10 xl:ml-6 justify-center items-center rounded-full" src={agentsData.find(item => item.displayName.toLocaleLowerCase() === player.agent.toLocaleLowerCase())?.displayIconSmall}></motion.img>
            <motion.span
              transition={{ duration: 0.6, delay: 0.4 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }}
              className="flex w-3/5 md:w-3/5 xl:w-3/5 justify-center items-center bg-[#FFD700] font-semibold text-black rounded-md">{player.username ? player.username : player.id}</motion.span>
            <motion.span
              transition={{ duration: 0.6, delay: 0.6 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }}
              className="flex w-1/5 justify-center items-center">{player.kills}</motion.span>
            <motion.span
              transition={{ duration: 0.6, delay: 0.8 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }}
              className="flex w-1/5 justify-center items-center">{player.assists}</motion.span>
            <motion.span
              transition={{ duration: 0.6, delay: 1 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }}
              className="flex w-1/5 justify-center items-center">{player.deaths}</motion.span>
          </motion.div>
        </motion.li>
      )
    })
  }

  return (
    <motion.div className='w-full h-full flex justify-center items-center rounded-md'>

      <AnimatePresence>
        <motion.div className='w-9/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-3/12 min-h-full flex flex-col justify-around p-2 items-center relative'>


          <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            key={'first-team'}
            className='w-full h-[40%] flex gap-2 justify-center items-center flex-col overflow-hidden'>
            {renderTeams(team1)}
          </motion.div>
          <div className='w-full flex'>
          <motion.button
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className='w-10 h-10 flex justify-center items-center border rounded-md border-[#FFD700] text-[#FFD700] transition duration-300 hover:bg-[#FFD700] hover:text-[#000]' onClick={() => {

              setPage(<Player />)
            }}>
            <FaArrowLeft />
          </motion.button >
          </div>


          <motion.div
            transition={{ duration: 0.4, }}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 1000 }}
            key={'second-team'}
            className='w-full h-[40%] flex gap-2 flex-col justify-center items-center overflow-hidden'>
            {renderTeams(team2)}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
