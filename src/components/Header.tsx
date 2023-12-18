const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 border-b">
      <div className="flex gap-7 ">
        <div>
          <img className="mr-4" src="./logo.svg" />
        </div>
        <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800">
          Collection
        </p>
        <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800">
          Men
        </p>
        <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800">
          About
        </p>
        <p className="cursor-pointer text-gray-500 font-semibold hover:text-gray-800">
          Contact
        </p>
      </div>
      <div className="flex gap-7 items-center">
        <div>
          <img width={25} src="./icon-cart.svg" className="cursor-pointer" />
        </div>
        <img
          className="border-orange-500 rounded-full border-2 cursor-pointer"
          width={40}
          src="./image-avatar.png"
        />
      </div>
    </div>
  );
};

export default Header;
