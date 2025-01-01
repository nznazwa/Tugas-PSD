import { addToCart } from "@/redux/features/cartSlice"; 
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

interface propsType {
    id: string;
    img: string;
    title: string;
    price: number;
    category: string;
}

const ProductCard = ({ id, img, category, title, price }: propsType) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payload = {
            id,
            img,
            title,
            price,
            quantity: 1,
        };

        dispatch(addToCart(payload));
        makeToast("Added to Cart");
    };

    return (
        <div className="border border-[#c4a990] p-6 rounded-lg shadow-xl bg-[#f8f1e3] hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center border-b border-[#c4a990] pb-4">
                <img 
                    src={img} 
                    alt={title} 
                    className="w-full h-64 object-cover rounded-md shadow-sm" // Adds soft shadow for vintage look
                />
            </div>

            <div className="px-4 py-4">
                <p className="text-[#7a5c3f] text-sm font-medium">{category}</p>
                <h2 className="font-serif text-2xl text-[#4a2c2a] mt-2">{title}</h2>

                <div className="mt-3 flex text-[#FFB21D] items-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className="text-[#7a5c3f] text-[14px] ml-2">(1.2k Reviews)</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-serif text-[#4a2c2a] text-xl">Rp{price}</h2>
                    <div 
                        className="flex gap-2 items-center bg-[#FF5A5F] text-white px-4 py-2 rounded-md cursor-pointer
                        hover:bg-[#c44d55] transition-colors duration-300"
                        onClick={addProductToCart}
                    >
                        <AiOutlineShoppingCart /> Add To Cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
