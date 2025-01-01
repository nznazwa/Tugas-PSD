import { useAppSelector } from '@/redux/hooks'
import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
            <Image src="/najwa/goes.png" alt="Logo" width={150} height={100} priority />
          </div>


        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-lg">
          <input
            type="text"
            className="flex-1 border-2 border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:ring-accent"
            placeholder="Search for products..."
          />
          <button className="bg-accent text-white text-2xl px-4 py-2 rounded-r-lg hover:bg-accent-dark">
            <BsSearch />
          </button>
        </div>

        {/* User and Cart */}
        <div className="flex items-center gap-6">
          {/* User Icon */}
          <div className="hidden md:flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-500 text-3xl flex justify-center items-center">
              <AiOutlineUser />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hello, Sign in</p>
              <p className="font-medium">Your Account</p>
            </div>
          </div>

          {/* Cart Icon */}
          <div
            className="relative text-gray-600 text-3xl cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 py-2">
        <div className="flex items-center border-2 border-gray-300 rounded-lg">
          <input
            type="text"
            className="flex-1 px-4 py-2 focus:outline-none"
            placeholder="Search for products..."
          />
          <button className="bg-accent text-white px-4 py-2 text-2xl rounded-r-lg hover:bg-accent-dark">
            <BsSearch />
          </button>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-200 mt-2" />
    </nav>
  );
};

export default Navbar;
