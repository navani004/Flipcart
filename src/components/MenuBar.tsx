import women from "../images/women.jpg"
import jewelry from "../images/jewelry.jpg"
import electronic from "../images/electronic.jpg"
import cloth from "../images/cloth.jpg"
interface MenuBarProps {
  menu: string;
  setMenu: (value: string) => void;
}
const MenuBar = (props:MenuBarProps) => {
    return (
        <div className="flex p-3">
            <div onClick={()=>props.setMenu("electronics")} className="cursor-pointer">
                <img src={electronic} className="w-32 h-20 ml-50" />
                <h1 className="ml-56 font-semibold">Electronics</h1>
            </div>
            <div  onClick={()=>props.setMenu("women's clothing")} className="cursor-pointer">
                <img src={women} className="w-32 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Women</h1>
            </div>
            <div  onClick={()=>props.setMenu("jewelery")} className="cursor-pointer"> 
                <img src={jewelry} className="w-32 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Fashion</h1>
            </div>
            <div  onClick={()=>props.setMenu("men's clothing")} className="cursor-pointer">
                <img src={cloth} className="w-35 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Clothing </h1>
            </div>

        </div>
    )
}

export default MenuBar
