
import women from "../images/women.jpg";
import jewelry from "../images/jewelry.jpg";
import electronic from "../images/electronic.jpg";
import cloth from "../images/cloth.jpg";

interface MenuBarProps {
  menu: string;
  setMenu: (value: string) => void;
}

const categories = [
  { name: "Electronics", value: "electronics", image: electronic },
  { name: "Women", value: "women's clothing", image: women },
  { name: "Fashion", value: "jewelery", image: jewelry },
  { name: "Clothing", value: "men's clothing", image: cloth },
];

const MenuBar = ({ menu, setMenu }: MenuBarProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50 rounded-lg shadow-inner">
      {categories.map((cat) => (
        <div
          key={cat.value}
          onClick={() => setMenu(cat.value)}
          className={`
            cursor-pointer
            flex
            flex-col
            items-center
            p-4
            w-36
            rounded-xl
            shadow
            transition
            hover:shadow-lg
            hover:scale-105
            hover:bg-blue-50
            ${menu === cat.value ? "ring-2 ring-blue-400" : ""}
          `}
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-28 h-20 object-cover rounded-md mb-2"
          />
          <h1 className="font-semibold text-gray-700">{cat.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
