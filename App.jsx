import { BrowserRouter as  Router,Route, Routes } from "react-router-dom";
// import Productdetail from "./components/productdetail";
import { items } from "./component/data";
import { useState } from "react";
import Product from "./component/product";
// import SearchItem from "./component/search";
import Cart from "./component/cart";
import Navbar from "./component/Navbar";
// import Productdetail from "./component/productdetail";
const App=()=>{
  const [data, setData] = useState([...items])
  const [cart,setCart]=useState([])
  return(
    <>
    <Router>
    <Navbar Cart={cart} setData={setData}/>
    <Routes>
    <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
     {/* <Route path="/product/:id" element={<Productdetail />} /> */}
    {/* <Route path="/Search:term" element={<SearchItem />} /> */}
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> 
</Routes>
    
    
    </Router>
    </>
  )
}
export default App