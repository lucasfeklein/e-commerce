import { FC, useState } from "react";

type HeroProps = {
  setCart: (value: React.SetStateAction<number>) => void;
};

type ImagesOverlayProps = {
  setToggleOverlay: (value: React.SetStateAction<boolean>) => void;
};

const ImagesOverlay: FC<ImagesOverlayProps> = ({ setToggleOverlay }) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  function handleSelectedImage(number: number) {
    setSelectedImage(number);
  }
  return (
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center">
      <div className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black opacity-50 -z-10"></div>
      <div className="flex flex-col w-[500px] gap-3 items-center">
        <img
          width={20}
          className="filter brightness-0 invert ml-auto cursor-pointer"
          src="./icon-close.svg"
          alt="close icon"
          onClick={() => setToggleOverlay(false)}
        />
        <div>
          <img
            src="./image-product-1.jpg"
            alt="main image"
            className="rounded-2xl"
          />
        </div>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((imageNumber) => (
            <div
              key={imageNumber}
              onClick={() => handleSelectedImage(imageNumber)}
              className={`rounded-2xl cursor-pointer hover:opacity-50 ${
                selectedImage === imageNumber
                  ? "border-2 border-orange-500 opacity-50"
                  : ""
              }`}
            >
              <img
                className="w-[100px] h-[100px] object-cover rounded-2xl"
                src={`./image-product-${imageNumber}-thumbnail.jpg`}
                alt={`img ${imageNumber}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Hero: FC<HeroProps> = ({ setCart }) => {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [toggleOverlay, setToggleOverlay] = useState<boolean>(true);

  function handleSelectedImage(number: number) {
    setSelectedImage(number);
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="mt-20 flex gap-32">
      <div className="flex-1 max-w-md">
        <img
          className="rounded-2xl w-full mb-4 min-w-[448px] cursor-pointer"
          onClick={() => setToggleOverlay(true)}
          src={`./image-product-${selectedImage}.jpg`}
          alt="selected img"
        />
        <div className="flex justify-between gap-3">
          {[1, 2, 3, 4].map((imageNumber) => (
            <div
              key={imageNumber}
              onClick={() => handleSelectedImage(imageNumber)}
              className={`rounded-2xl cursor-pointer overflow-hidden hover:opacity-50 ${
                selectedImage === imageNumber
                  ? "border-2 border-orange-500 opacity-50"
                  : ""
              }`}
            >
              <img
                width={100}
                className="w-full h-full object-cover"
                src={`./image-product-${imageNumber}-thumbnail.jpg`}
                alt={`img ${imageNumber}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <p className="text-orange-500 font-bold text-sm tracking-widest">
          SNEAKER COMPANY
        </p>
        <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
        <p className="text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div>
          <div className="flex gap-3 items-center">
            <p className="text-gray-800 font-bold text-xl">$125.00</p>
            <div className="flex items-center bg-orange-100 rounded-md px-2">
              <p className="text-orange-500 font-bold text-sm">50%</p>
            </div>
          </div>
          <p className="text-gray-400 font-bold text-sm line-through">
            $250.00
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex h-[50px]">
            <button
              className="bg-gray-100 text-orange-500 font-bold px-3 text-xl rounded-l-md"
              onClick={subtract}
            >
              <img src="./icon-minus.svg" width={10} />
            </button>
            <p className="bg-gray-100 font-bold px-5 text-base flex justify-center items-center">
              {count}
            </p>
            <button
              className="bg-gray-100 text-orange-500 font-bold px-3 text-xl rounded-r-md"
              onClick={add}
            >
              <img src="./icon-plus.svg" width={10} />
            </button>
          </div>

          <button
            className="flex bg-orange-500 text-white flex-1 justify-center items-center gap-3 rounded-md hover:opacity-50 max-w-[300px] min-w-[180px] font-bold"
            onClick={() => setCart((prevCart) => prevCart + count)}
          >
            <img
              src="./icon-cart.svg"
              alt="icon cart"
              className="filter brightness-0 invert"
            />{" "}
            Add to cart
          </button>
        </div>
      </div>
      {toggleOverlay && <ImagesOverlay setToggleOverlay={setToggleOverlay} />}
    </div>
  );
};
