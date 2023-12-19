import { FC } from "react";

type MobileMenuProps = {
  setToggleMenu: (value: React.SetStateAction<boolean>) => void;
};

export const MobileMenu: FC<MobileMenuProps> = ({ setToggleMenu }) => {
  const menuArray = ["Collection", "Men", "About", "Contact"];
  return (
    <div className="absolute w-screen h-screen inset-0">
      <div className="absolute w-screen h-screen inset-0 bg-black opacity-50 z-20"></div>
      <div className="absolute w-[70%] h-screen inset-0 bg-white z-30 p-8">
        <img
          src="./icon-close.svg"
          alt="close icon"
          className="mb-12 cursor-pointer"
          onClick={() => setToggleMenu(false)}
        />
        <div className="flex flex-col gap-5">
          {menuArray.map((menu) => (
            <p className="font-bold text-lg cursor-pointer" key={menu}>
              {menu}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
