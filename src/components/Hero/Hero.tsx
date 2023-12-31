import { FC, useState } from "react";
import { useWindowSize } from "react-use";

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

  function handleNextImage() {
    if (selectedImage < 4) {
      setSelectedImage((prevImg) => prevImg + 1);
    }
  }

  function handlePreviousImage() {
    if (selectedImage > 1) {
      setSelectedImage((prevImg) => prevImg - 1);
    }
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
        <div className="relative">
          <img
            src={`./image-product-${selectedImage}.jpg`}
            alt="main image"
            className="rounded-2xl"
          />
          <img
            onClick={handlePreviousImage}
            src="./icon-previous.svg"
            alt="previous icon"
            className="cursor-pointer bg-white rounded-full w-10 h-10 p-3 absolute top-1/2 transform -translate-y-1/2 left-0 -ml-5"
          />
          <img
            onClick={handleNextImage}
            src="./icon-next.svg"
            alt="next icon"
            className="cursor-pointer bg-white rounded-full w-10 h-10 p-3 absolute top-1/2 transform -translate-y-1/2 right-0 -mr-5"
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          {[1, 2, 3, 4].map((imageNumber) => (
            <div
              key={imageNumber}
              onClick={() => handleSelectedImage(imageNumber)}
              className={`relative rounded-2xl cursor-pointer overflow-hidden ${
                selectedImage === imageNumber
                  ? "border-2 border-orange-500 "
                  : ""
              }`}
            >
              <img
                className="w-[100px] h-[100px]"
                src={`./image-product-${imageNumber}-thumbnail.jpg`}
                alt={`img ${imageNumber}`}
              />
              {selectedImage === imageNumber && (
                <div className="absolute bg-white inset-0 opacity-50"></div>
              )}
              <div
                className={`absolute hover:bg-white inset-0 ${
                  selectedImage === imageNumber
                    ? "hover:opacity-0"
                    : "hover:opacity-50"
                } `}
              ></div>
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
  const [toggleOverlay, setToggleOverlay] = useState<boolean>(false);
  const { width } = useWindowSize();

  function handleSelectedImage(number: number) {
    setSelectedImage(number);
  }

  function handleNextImage() {
    if (selectedImage < 4) {
      setSelectedImage((prevImg) => prevImg + 1);
    }
  }

  function handlePreviousImage() {
    if (selectedImage > 1) {
      setSelectedImage((prevImg) => prevImg - 1);
    }
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
    <div className="sm:mt-20 flex flex-col sm:flex-row sm:gap-32 gap-6">
      <div className="relative flex-1 sm:max-w-md">
        <img
          className="sm:rounded-2xl sm:mb-4 min-w-[250px] sm:cursor-pointer h-[280px] sm:h-auto w-full object-cover"
          onClick={() => {
            if (width >= 920) {
              setToggleOverlay(true);
            }
          }}
          src={`./image-product-${selectedImage}.jpg`}
          alt="selected img"
        />
        {width < 920 && (
          <div
            onClick={handleNextImage}
            className="h-[40px] w-[40px] bg-white absolute flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 right-5 cursor-pointer"
          >
            <img src="./icon-next.svg" alt="icon next" />
          </div>
        )}
        {width < 920 && (
          <div
            onClick={handlePreviousImage}
            className="h-[40px] w-[40px] bg-white absolute flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 left-5 cursor-pointer"
          >
            <img src="./icon-previous.svg" alt="icon previous" />
          </div>
        )}
        <div className="sm:flex hidden justify-between gap-3 ">
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
      <div className="flex-1 flex flex-col gap-6 px-6">
        <p className="text-orange-500 font-bold text-sm tracking-widest">
          SNEAKER COMPANY
        </p>
        <h1 className="font-bold text-4xl">Fall Limited Edition Sneakers</h1>
        <p className="text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="sm:block flex justify-between items-center">
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
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex h-[50px]">
            <button
              className="bg-gray-100 text-orange-500 font-bold px-3 text-xl rounded-l-md w-[34px]"
              onClick={subtract}
            >
              <img src="./icon-minus.svg" width={10} />
            </button>
            <p className="bg-gray-100 font-bold px-5 text-base flex flex-1 justify-center items-center">
              {count}
            </p>
            <button
              className="bg-gray-100 text-orange-500 font-bold px-3 text-xl rounded-r-md w-[34px]"
              onClick={add}
            >
              <img src="./icon-plus.svg" width={10} />
            </button>
          </div>

          <button
            className="flex bg-orange-500 text-white justify-center items-center gap-3 rounded-md hover:opacity-50 min-w-[180px] font-bold h-[50px]"
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
      {toggleOverlay && width >= 920 && (
        <ImagesOverlay setToggleOverlay={setToggleOverlay} />
      )}
    </div>
  );
};
