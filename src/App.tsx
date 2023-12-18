import { useState } from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const [cart, setCart] = useState<number>(0);
  return (
    <div className="mx-32">
      <Header cart={cart} setCart={setCart} />
      <Hero setCart={setCart} />
    </div>
  );
}

export default App;
