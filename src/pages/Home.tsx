
import { SearchBar } from '../components/SearchBar'
import { Leaderboard } from '../components/Leaderboard'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.div className='w-full h-full flex flex-col justify-center items-center gap-20'>
        <SearchBar />
        <Leaderboard />
    </motion.div>
  )
}
