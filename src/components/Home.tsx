
// import { useEffect, useState } from "react";
// import f from "../images/f.png";
// import { Link } from "@tanstack/react-router";

// interface SearchProps {
//   search: string;
//   menu: string;
// }

// const API = "https://fakestoreapi.com/products";

// const Home = (props: SearchProps) => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
// const [menu, setMenu] = useState<string>("")

//   const getProducts = async () => {
//     try {
//       const res = await fetch(API);
//       const data = await res.json();
//       setProducts(data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   if (loading) return <p>Loading...</p>;


  

//   return (
//     <div className="bg-gray-200 min-h-screen px-12 py-4">
//       <div className="grid grid-cols-4 gap-x-7 gap-y-7">
//         {!props.menu
//           ? products
//               .filter((p: any) =>
//                 p.title.toLowerCase().includes(props.search.toLowerCase())
//               )
//               .map((prod: any) => (
//                 <Link
//                   key={prod.id}
//                   to="/details/$id"
//                   params={{ id: String(prod.id) }}
//                 >
//                   <div className="bg-white h-80 rounded-xl shadow-md p-4 relative flex flex-col
//                                   hover:scale-105 hover:shadow-2xl hover:-translate-y-1
//                                   transition-all duration-500 ease-in-out font-sans">
                    
//                     {/* Flipkart icon top-right */}
//                     <img 
//                       src={f} 
//                       className="w-12 h-8 absolute top-3 right-3 hover:opacity-80 transition-opacity duration-300" 
//                     />

//                     {/* Product image */}
//                     <div className="flex justify-center items-center flex-1 bg-gray-50 rounded-md">
//                       <img
//                         className="h-32 object-contain hover:scale-105 transition-transform duration-300"
//                         src={prod.image}
//                         alt={prod.title}
//                       />
//                     </div>

//                     {/* Description, Price, Title with enhanced font styles */}
//                     <div className="mt-2">
//                       <h1 className="text-sm text-gray-500 line-clamp-2">
//                         {prod.description}
//                       </h1>
//                       <h1 className="text-lg font-semibold text-gray-800 mt-1">
//                         ${prod.price}
//                       </h1>
//                       <h1 className="text-sm font-medium text-gray-700 mt-1 line-clamp-1">
//                         {prod.title}
//                       </h1>
//                     </div>
//                   </div>
//                 </Link>
//               ))
//           : products
//               .filter((p: any) =>
//                 p.category.toLowerCase().includes(props.menu.toLowerCase())
//               )
//               .map((prod: any) => (
//                 <div
//                   key={prod.id}
//                   className="bg-white h-80 rounded-xl shadow-md p-4 relative flex flex-col
//                              hover:scale-105 hover:shadow-2xl hover:-translate-y-1
//                              transition-all duration-500 ease-in-out font-sans"
//                 >
//                   <img 
//                     src={f} 
//                     className="w-12 h-8 absolute top-3 right-3 hover:opacity-80 transition-opacity duration-300" 
//                   />

//                   <div className="flex justify-center items-center flex-1 bg-gray-50 rounded-md">
//                     <img
//                       className="h-32 object-contain hover:scale-105 transition-transform duration-300"
//                       src={prod.image}
//                       alt={prod.title}
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <h1 className="text-sm text-gray-500 line-clamp-2">
//                       {prod.description}
//                     </h1>
//                     <h1 className="text-lg font-semibold text-gray-800 mt-1">
//                       ${prod.price}
//                     </h1>
//                     <h1 className="text-sm font-medium text-gray-700 mt-1 line-clamp-1">
//                       {prod.title}
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import f from "../images/f.png";
// import { Link } from "@tanstack/react-router";
// import type { Product } from "../type/product";
// import { useRouteContext } from "@tanstack/react-router";

// interface SearchProps {
//   search: string;
//   menu: string; // category filter
// }

// const API = "https://fakestoreapi.com/products";

// const Home = () => {
//   const { search, menu } = useRouteContext(); 
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   const getProducts = async () => {
//     try {
//       const res = await fetch(API);
//       const data: Product[] = await res.json();
//       setProducts(data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;

// const filteredProducts = products.filter((p) => {
//   const matchesMenu = menu ? p.category.toLowerCase() === menu.toLowerCase() : true;
//   const matchesSearch = search ? p.title.toLowerCase().includes(search.toLowerCase()) : true;
//   return matchesMenu && matchesSearch; // both must match
// });


//   return (
//     <div className="bg-gray-200 min-h-screen px-12 py-4">
//       <div className="grid grid-cols-4 gap-x-7 gap-y-7">
//         {filteredProducts.map((prod) => (
//           <Link
//             key={prod.id}
//             to="/details/$id"
//             params={{ id: String(prod.id) }} // for TanStack Router dynamic params
//           >
            
//             <div className="bg-white h-80 rounded-xl shadow-md p-4 relative flex flex-col
//                             hover:scale-105 hover:shadow-2xl hover:-translate-y-1
//                             transition-all duration-500 ease-in-out font-sans">
              
//               <img 
//                 src={f} 
//                 className="w-12 h-8 absolute top-3 right-3 hover:opacity-80 transition-opacity duration-300" 
//                 alt="Flipkart icon"
//               />

//               <div className="flex justify-center items-center flex-1 bg-gray-50 rounded-md">
//                 <img
//                   className="h-32 object-contain hover:scale-105 transition-transform duration-300"
//                   src={prod.image}
//                   alt={prod.title}
//                 />
//               </div>

//               <div className="mt-2">
//                 <h1 className="text-sm text-gray-500 line-clamp-2">{prod.description}</h1>
//                 <h1 className="text-lg font-semibold text-gray-800 mt-1">${prod.price}</h1>
//                 <h1 className="text-sm font-medium text-gray-700 mt-1 line-clamp-1">{prod.title}</h1>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Product } from "../type/product";
import f from "../images/f.png";

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
  );
};

export default Home;
