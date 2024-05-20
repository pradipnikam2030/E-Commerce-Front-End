import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from '../src/components/Footer/Footer.jsx'
import men_banner from '../src/components/Assets/banner_mens.png'
import women_banner from '../src/components/Assets/banner_women.png'
import kids_banner from '../src/components/Assets/banner_kids.png'
function App() {
  return (
    <div>
       <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>

    
    </div>
  );
}

export default App;
