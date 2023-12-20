import { FC, useState } from "react";
import { useWindowSize } from "react-use";
import { MobileMenu } from "./MobileMenu";

const menuArray = ["Collection", "Men", "About", "Contact"];

type HeaderProps = {
  cart: number;
  setCart: (value: React.SetStateAction<number>) => void;
};

const Header: FC<HeaderProps> = ({ cart, setCart }) => {
  const [toggleCart, setToggleCart] = useState<boolean>(false);
  const { width } = useWindowSize();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className="flex justify-between sm:border-b px-8 sm:px-0">
      <div className="flex gap-7 sm:mt-[40px] mt-[20px] sm:mb-0 mb-[20px]">
        <div className="flex gap-3 items-start">
          {width < 920 && (
            <img
              src="./icon-menu.svg"
              alt="icon menu"
              className="mt-1 cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          <img className="mr-4" src="./logo.svg" />
        </div>
        <div className="flex gap-6 sm:h-[60px]">
          {width >= 920 &&
            menuArray.map((menu) => (
              <p
                key={menu}
                className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800 hover:border-b-2 hover:border-b-orange-500"
              >
                {menu}
              </p>
            ))}
          {toggleMenu && <MobileMenu setToggleMenu={setToggleMenu} />}
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <div className="sm:relative">
          <img
            width={25}
            src="./icon-cart.svg"
            className="cursor-pointer"
            onClick={() => setToggleCart(!toggleCart)}
          />
          {cart !== 0 && (
            <div
              className="absolute sm:right-[-5px] sm:top-[-8px] top-3 right-[90px] bg-orange-500 rounded-full px-2 text-white text-[10px] font-bold cursor-pointer"
              onClick={() => setToggleCart(!toggleCart)}
            >
              {cart}
            </div>
          )}
          {toggleCart && (
            <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 top-20 shadow-md w-[95%] sm:w-[300px] sm:left-[-120px] sm:top-10 p-3 bg-white rounded-md z-10">
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
