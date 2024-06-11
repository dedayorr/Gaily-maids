// "use client"
import React, {createContext, useState} from "react"
// import { useClient } from 'next/client'; 

export const ContextProvider = createContext()

export const Context = ({children})=>{
    // useClient();
    const [navOpen, setNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const toggleMenu = () => {
        setNavOpen(!navOpen);
      };
    
      const closeNav = () => {
        setNavOpen(false);
      };
    
      const openModal = () => {
        setShowModal(true);
      };
      const closeModal = () => {
        setShowModal(false);
      };
const hold = {
    navOpen,
    showModal,
    toggleMenu,
    closeNav,
    openModal,
    closeModal,
}
    return (
        <div>
            <ContextProvider.Provider value={hold}>
                {children}
            </ContextProvider.Provider>
        </div>
    )
}

