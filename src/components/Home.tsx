
import { useEffect, useState } from "react";
import f from "../images/f.png";
import { Link } from "@tanstack/react-router";

interface SearchProps {
    search: string;
    menu: string;
}

const API = "https://fakestoreapi.com/products";

const Home = (props: SearchProps) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="bg-gray-200 grid grid-cols-5">
            {!props.menu
                ? products
                    .filter((p: any) =>
                        p.title.toLowerCase().includes(props.search.toLowerCase())
                    )
                    .map((prod: any) => (
                        <Link
                            key={prod.id}
                            to="/details/$id"
                            params={{ id: String(prod.id) }}
                        >
                            <div className="bg-white ml-3 mt-3 max-w-sm rounded overflow-hidden shadow-lg p-3">
                                <img
                                    className="w-full h-64"
                                    src={prod.image}
                                    alt={prod.title}
                                />
                                <div className="flex items-center">
                                    <h1>
                                        {prod?.description.substring(
                                            0,
                                            prod?.description.indexOf(" ")
                                        ) + "..."}
                                    </h1>
                                    <img src={f} className="w-28 h-24" />
                                </div>
                                <h1 className="font-semibold text-lg">${prod.price}</h1>
                                <h1>{prod.title}</h1>
                            </div>
                        </Link>
                    ))
                : products
                    .filter((p: any) =>
                        p.category.toLowerCase().includes(props.menu.toLowerCase())
                    )
                    .map((prod: any) => (
                        <div
                            key={prod.id}
                            className="bg-white ml-3 mt-3 max-w-sm rounded overflow-hidden shadow-lg p-3"
                        >
                            <img
                                className="w-full h-64"
                                src={prod.image}
                                alt={prod.title}
                            />
                            <div className="flex items-center">
                                <h1>
                                    {prod?.description.substring(
                                        0,
                                        prod?.description.indexOf(" ")
                                    ) + "..."}
                                </h1>
                                <img src={f} className="w-28 h-24" />
                            </div>
                            <h1 className="font-semibold text-lg">${prod.price}</h1>
                            <h1>{prod.title}</h1>
                        </div>
                    ))}
        </div>
    );
};

export default Home;
