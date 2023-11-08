import { MdSearch } from 'react-icons/md';
import { useApp } from '../AppContext';
import { fakeUsers } from '../api/fakeApi';
import { Player } from '../pages/Player';
import { motion } from 'framer-motion';

export const SearchBar = () => {

    const { setPage, setPlayer, searchInput, setSearchInput } = useApp()

    const handleClick = () => {
        const users = fakeUsers;

        const player = users.find(u => u.username === searchInput);

        if (player) {
            setPlayer(player)
            setPage(<Player />)
        }
    }

    return (
        <motion.div
            transition={{ duration: 0.6, delay: 0.4 }}
            initial={{ scale: 0, }}
            animate={{ scale: 1, }}
            exit={{ scale: 0 }}
            className='flex justify-center items-center w-2/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-10 rounded-md overflow-hidden'>
            <input type='search' className='text-center w-3/4 h-full text-black' onChange={(e) => setSearchInput(e.target.value)}></input>
            <button type='submit' className='flex justify-center items-center w-1/4 h-full bg-[#FFD700] bg-opacity-95 text-3xl text-black' onClick={handleClick}><MdSearch /></button>
        </motion.div>
    )
}
