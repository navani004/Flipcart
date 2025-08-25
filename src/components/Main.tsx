import { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import MenuBar from './MenuBar'
import Welcome from './Welcome'

const Main = () => {
  const [search, setSearch] = useState("")
  const [menu, setMenu] = useState("")
  return (
    <div>
      <Navbar setSearch={setSearch}setMenu={setMenu}/>
      <MenuBar setMenu={setMenu} />
      <Welcome/>

      <Home search={search}  menu={menu}/>
    </div>

  )
}

export default Main