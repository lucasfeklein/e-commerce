const Header = () => {
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
        <div>
          <img width={25} src="./icon-cart.svg" className="cursor-pointer" />
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
