const Header = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex gap-7">
        <img className="mr-4" src="./logo.svg" />
        <p>Collection</p>
        <p>Men</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-7 items-center">
        <div>
          <img width={25} src="./icon-cart.svg" />
        </div>
        <img width={40} src="./image-avatar.png" />
      </div>
    </div>
  );
};

export default Header;
