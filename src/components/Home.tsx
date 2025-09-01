
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Product } from "../type/product";
import f from "../images/f.png";
import Welcome from "./Welcome";

const API = "https://fakestoreapi.com/products";

interface HomeProps {
  search: string;
  menu: string;
}

const Home = ({ search, menu }: HomeProps) => {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(API);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  const filteredProducts = products.filter((p) => {
    const matchesMenu = menu ? p.category.toLowerCase() === menu.toLowerCase() : true;
    const matchesSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
    return matchesMenu && matchesSearch;
  });

  return (
    <>
    <Welcome/>
    <div className="bg-gray-200 min-h-screen px-12 py-4">
      <div className="grid grid-cols-4 gap-x-7 gap-y-7">
        {filteredProducts.map((prod) => (
          <Link key={prod.id} to="/details/$id" params={{ id: String(prod.id) }}>
            <div className="bg-white h-80 rounded-xl shadow-md p-4 relative flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <img src={f} className="w-12 h-8 absolute top-3 right-3" alt="icon" />
              <div className="flex justify-center items-center flex-1 bg-gray-50 rounded-md">
                <img className="h-32 object-contain" src={prod.image} alt={prod.title} />
              </div>
              <div className="mt-2">
                <h1 className="text-sm text-gray-500 line-clamp-2">{prod.description}</h1>
                <h1 className="text-lg font-semibold text-gray-800 mt-1">${prod.price}</h1>
                <h1 className="text-sm font-medium text-gray-700 mt-1 line-clamp-1">{prod.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
