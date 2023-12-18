export const Hero = () => {
  return (
    <div className="mt-20 flex">
      <div className="flex-1">oi</div>
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
      </div>
    </div>
  );
};
