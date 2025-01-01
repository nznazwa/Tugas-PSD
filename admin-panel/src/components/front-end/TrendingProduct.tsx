"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface IProduct {
    _id: string;
    imgScr: string;
    fileKey: string;
    name: string;
    price: number;
    category: string;
}

const TrendingProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    useEffect(() => {
        axios
            .get("/api/get_products")
            .then((res) => {
                setProducts(res.data);
                setFilteredProducts(res.data); // Initially set all products
            })
            .catch((err) => console.log(err));
    }, []);

    // Handle category change
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);

        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.category === category));
        }
    };

    return (
        <div className="container mt-32 px-4">
            <div className="sm:flex justify-between items-center">
                <h2 className="text-4xl font-bold text-[#5A3A1B] font-['Cormorant_Garamond',serif]">
                    Trending Products
                </h2>

                <div className="flex gap-4 text-lg mt-4 sm:mt-0">
                    <button
                        className={`${
                            activeCategory === 'All' ? 'text-[#5A3A1B] border-b-2 border-[#9A6E3A] pb-1' : 'text-gray-500 hover:text-[#5A3A1B] transition'
                        }`}
                        onClick={() => handleCategoryChange('All')}
                    >
                        All
                    </button>
                    <button
                        className={`${
                            activeCategory === 'Bucket' ? 'text-[#5A3A1B] border-b-2 border-[#9A6E3A] pb-1' : 'text-gray-500 hover:text-[#5A3A1B] transition'
                        }`}
                        onClick={() => handleCategoryChange('Bucket')}
                    >
                        Bucket
                    </button>
                    <button
                        className={`${
                            activeCategory === 'Flower' ? 'text-[#5A3A1B] border-b-2 border-[#9A6E3A] pb-1' : 'text-gray-500 hover:text-[#5A3A1B] transition'
                        }`}
                        onClick={() => handleCategoryChange('Flower')}
                    >
                        Flower
                    </button>
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
                {filteredProducts.map((item: IProduct) => (
                    <div key={item._id} className="flex flex-col items-center justify-center">
                        <ProductCard
                            id={item._id}
                            img={item.imgScr}
                            category={item.category}
                            title={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
