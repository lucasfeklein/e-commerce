import { useState } from "react";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  const [cart, setCart] = useState<number>(0);

  return (
    <div className="sm:mx-32">
      <Header cart={cart} setCart={setCart} />
      <Hero setCart={setCart} />
    </div>
  );
}

export default App;
