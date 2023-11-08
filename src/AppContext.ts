import { createContext, useContext } from "react"
import { PlayerType } from "./api/fakeApi";
import { AgentType, ModalType, RankType } from "./types";

export type AppContextType = {
    page: JSX.Element;
    setPage: React.Dispatch<React.SetStateAction<JSX.Element>>;
    modal:ModalType;
    setModal:React.Dispatch<React.SetStateAction<ModalType>>;
    player: PlayerType;
    setPlayer:React.Dispatch<React.SetStateAction<PlayerType>>;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    agentsData: AgentType[];
    setAgentsData:React.Dispatch<React.SetStateAction<AgentType[]>>;
    ranksData: RankType[];
    setRanksData:React.Dispatch<React.SetStateAction<RankType[]>>;
    currentAgent: AgentType;
    setCurrentAgent:React.Dispatch<React.SetStateAction<AgentType>>;
    content:JSX.Element;
    setContent:React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export const AppContext = createContext({} as AppContextType)

export const useApp = () => {
    const ctx = useContext(AppContext)
    return ctx
}