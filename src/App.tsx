import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useProductsContext } from "./context/products_context";
function App() {
  const { menuIsClose, openSidebar } = useProductsContext();
  return (
    <div className="App" onClick={!menuIsClose ? openSidebar : null}>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
