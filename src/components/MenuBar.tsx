import women from "../images/women.jpg"
import jewelry from "../images/jewelry.jpg"
import electronic from "../images/electronic.jpg"
import cloth from "../images/cloth.jpg"
interface menuProps{
    setMenu:any
}
const MenuBar = (props:menuProps) => {
    return (
        <div className="flex p-3">
            <div onClick={()=>props.setMenu("electronics")} className="cursor-pointer">
                <img src={electronic} className="w-32 h-20 ml-50" />
                <h1 className="ml-56 font-semibold">Electronics</h1>
            </div>
            <div  onClick={()=>props.setMenu("women")} className="cursor-pointer">
                <img src={women} className="w-32 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Women</h1>
            </div>
            <div  onClick={()=>props.setMenu("jewelery")} className="cursor-pointer"> 
                <img src={jewelry} className="w-32 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Fashion</h1>
            </div>
            <div  onClick={()=>props.setMenu("men's")} className="cursor-pointer">
                <img src={cloth} className="w-35 h-20 ml-48" />
                <h1 className="ml-57 font-semibold">Clothing </h1>
            </div>

        </div>
    )
}

export default MenuBar



