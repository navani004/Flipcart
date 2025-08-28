import  { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from '@tanstack/react-router'

function layout() {
    const [search, setSearch] = useState("")
      const [menu, setMenu] = useState<Boolean>(false)
  return (
    <>
    <Navbar setSearch={setSearch} setMenu={setMenu} search={''}/>

    <Outlet/>
    
    </>
  )
}

export default layout

