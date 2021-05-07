import React, { useState, useContext } from 'react'
import sublinks from '../images/dataProducts'
import menuData from '../components/AirtableData'

const AppContext = React.createContext()

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: [],})

    const [order, setOrder] = useState([])

    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) =>{
        const page = sublinks.find((link) => link.page === text)
        setPage(page)

        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false)
    }


    const selectOrder = (id) =>{
        setOrder(menuData.filter((item) => item.id === id))
    }

    return <AppContext.Provider value={{isSidebarOpen, isSubmenuOpen, openSubmenu, openSidebar, closeSidebar, closeSubmenu, location, page, selectOrder, order}}>{children}</AppContext.Provider>
}


export const useCartProducts = () =>{
    return useContext(AppContext)
}