import MenuBar from './MenuBar'
import Welcome from './Welcome'
import Home from './Home'
import { useRouteContext } from "@tanstack/react-router"

const Main = () => {
  const { search, menu } = useRouteContext({ from: "/" }) // ✅ gets context from root route

  return (
    <div>
      <MenuBar setMenu={() => {}} />
      <Welcome />
      <Home search={search} menu={menu} />
    </div>
  )
}

export default Main
