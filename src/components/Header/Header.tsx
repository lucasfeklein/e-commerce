import { FC, useState } from "react";

type HeaderProps = {
  cart: number;
  setCart: (value: React.SetStateAction<number>) => void;
};

const Header: FC<HeaderProps> = ({ cart, setCart }) => {
  const [toggleCart, setToggleCart] = useState<boolean>(false);

  return (
    <div className="flex justify-between border-b">
      <div className="flex gap-7 mt-[40px]">
        <div>
          <img className="mr-4" src="./logo.svg" />
        </div>
        <div className="flex gap-6 h-[60px]">
          <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800 hover:border-b-2 hover:border-b-orange-500">
            Collection
          </p>
          <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800 hover:border-b-2 hover:border-b-orange-500">
            Men
          </p>
          <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800 hover:border-b-2 hover:border-b-orange-500">
            About
          </p>
          <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800 hover:border-b-2 hover:border-b-orange-500">
            Contact
          </p>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <div className="relative">
          <img
            width={25}
            src="./icon-cart.svg"
            className="cursor-pointer"
            onClick={() => setToggleCart(!toggleCart)}
          />
          {cart !== 0 && (
            <div
              className="absolute right-[-5px] top-[-8px] bg-orange-500 rounded-full px-2 text-white text-[10px] font-bold cursor-pointer"
              onClick={() => setToggleCart(!toggleCart)}
            >
              {cart}
            </div>
          )}
          {toggleCart && (
            <div className="absolute shadow-md w-[300px] left-[-120px] top-10 p-3 bg-white">
              <p className="border-b py-2 mb-3 font-bold text-sm">Cart</p>
              {cart === 0 ? (
                <div className="font-bold text-gray-400 h-[100px] flex items-center justify-center">
                  Your cart is empty.
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src="./image-product-1-thumbnail.jpg"
                      alt="img thumbnail"
                      className="w-[40px] h-[40px] rounded-md"
                    />
                    <div>
                      <p className="text-gray-400 text-sm">
                        Fall Limited Edition Sneakers
                      </p>
                      <p className="text-gray-400 text-sm">
                        $125.00 x {cart}
                        <span className="text-gray-800 font-bold">
                          {" "}
                          ${cart * 125}.00
                        </span>
                      </p>
                    </div>
                    <img
                      src="./icon-delete.svg"
                      alt="delete icon"
                      className="w-3 h-4 cursor-pointer"
                      onClick={() => setCart(0)}
                    />
                  </div>
                  <button className="bg-orange-500 rounded-md w-full py-2 font-semibold text-sm mt-4 text-white">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <img
          className="hover:border-orange-500 rounded-full hover:border-2 cursor-pointer"
          width={40}
          src="./image-avatar.png"
        />
      </div>
    </div>
  );
};

export default Header;
