import { BrowserRouter as Router } from "react-router-dom";
import "./globalStyles.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <>
      <Router>
        <Hero />
        <Products heading="Choose your favourite" data= {productData} />
        <Feature />
        <Products heading="For You" data= {productDataTwo} />
      </Router>
    </>
  );
}

export default App;
