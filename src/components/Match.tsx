import { AnimatePresence, motion } from 'framer-motion'
import { TeamType, team1, team2 } from '../api/fakeApi'
import { useApp } from '../AppContext'
import { Player } from '../pages/Player'
import { FaArrowLeft } from 'react-icons/fa6'

export const Match = () => {

  const { agentsData, setPage} = useApp()



  const renderTeams = (team: TeamType) => {
    return team.map(player => {
      return (

        <motion.li key={player.id} className='w-full h-10 pt-1 pb-1 flex justify-center items-center text-[#FFD700] border border-[#FFD700]  transition duration-700 hover:cursor-pointer rounded-md text-center text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] whitespace-normal'>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-1 h-full">
            <motion.img
              transition={{ duration: 0.6, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }} className="flex w-auto m-auto h-8  justify-center items-center rounded-full" src={agentsData.find(item => item.displayName.toLocaleLowerCase() === player.agent.toLocaleLowerCase())?.displayIconSmall}></motion.img>
            <motion.span
              transition={{ duration: 0.6, delay: 0.4 }}
              initial={{ opacity: 0, scale: 0, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -100 }}
              className="flex w-1/5 justify-center items-center bg-[#FFD700] text-black rounded-md">{player.username ? player.username : player.id}</motion.span>
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
    <motion.div className='w-11/12 sm:w-3/5 h-full flex flex-col justify-center sm:justify-around items-center rounded-md gap-8'>


      <AnimatePresence>

        <motion.div
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          key={'first-team'}
          className='w-4/5 h-2/5 flex justify-center items-center flex-col gap-2 overflow-hidden'>
          {renderTeams(team1)}
        </motion.div>

        <motion.button
         transition={{ duration: 0.4 }}
         initial={{ opacity: 0,scale:0}}
         animate={{ opacity: 1,scale:1 }}
         exit={{ opacity: 0, scale:0}} 
        className='w-10 h-10 flex justify-center items-center border rounded-md border-[#FFD700] text-[#FFD700] absolute top-2 left-2' onClick={() => {

          setPage(<Player />)
        }}>
          <FaArrowLeft />
        </motion.button >

        <motion.div
          transition={{ duration: 0.4, }}
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1000 }}
          key={'second-team'}
          className='w-4/5 h-2/5 flex flex-col justify-center items-center gap-2 overflow-hidden'>
          {renderTeams(team2)}
        </motion.div>

      </AnimatePresence>
    </motion.div>
  )
}
