import { useMemo, useState } from 'react';
import './App.css'
import { AppContext } from './AppContext';
import { Home } from './pages/Home';
import { PlayerType, fakeUsers } from './api/fakeApi';
import {useEffect} from 'react'
import { AgentType, RankType } from './types';
import { LastMatches } from './components/LastMatches';
import { Player } from './pages/Player';
import { Match } from './components/Match';

const App = () => {

  const [page, setPage] = useState(<Player />);
  const [modal, setModal] = useState({state: false, element: <Match />})
  const [player, setPlayer] = useState(fakeUsers[0] as PlayerType)
  const [searchInput, setSearchInput] = useState('');
  const [agentsData, setAgentsData] = useState([] as AgentType[])
  const [ranksData, setRanksData] = useState([] as RankType[])
  const [currentAgent, setCurrentAgent] = useState({} as AgentType)
  const [content, setContent] = useState(<LastMatches />)
 

  useEffect(() => {
    (async () => {
      const res = await fetch('https://valorant-api.com/v1/agents');
      const data = await res.json()
      setAgentsData(data.data)
      console.log(data.data);
      
    })()
    
  },[])

  useEffect(() => {
    (async () => {
      const res = await fetch('https://valorant-api.com/v1/competitivetiers');
      const data = await res.json()
      setRanksData(data.data[data.data.length - 1].tiers)
     
    })()
    
  },[])


  const value = useMemo(() => {
    return {
      page, setPage,
      modal,setModal,
      player, setPlayer,
      searchInput,setSearchInput,
      agentsData,setAgentsData,
      ranksData,setRanksData,
      currentAgent, setCurrentAgent,
      content,setContent

    }
  },
    [
      page,
      modal,
      player,
      searchInput,
      agentsData,
      ranksData,
      currentAgent,
      content
    ])

  return (
    <AppContext.Provider value={value}>
      <div 
      className={`
      w-full 
      h-screen 
      flex 
      justify-center 
      items-center
      bg-zinc-900 
      text-white
      overflow-hidden`}>
        {page}
        {modal.state && modal.element}
      </div>
    </AppContext.Provider>
  )
}

export default App;
