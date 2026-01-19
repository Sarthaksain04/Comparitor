import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Button from './pages/Button';

import CartPage from './pages/CartPage';
import Compared from './pages/Compared';
import Contacts from './pages/Contacts';
import Dashboard from './pages/Dashboard';
import Explorepage from './pages/Explorepage';
import Home from './pages/Home';
import Loading from './pages/loading';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Preloader from './pages/Preloader';
import Product from './pages/Product';
import Productlist from './pages/Productlist';
import Reels from './pages/Reels';
import Search from './pages/Search';
import ThreeD from './pages/ThreeD';
import ContactPage from "./pages/ContactPage";
import Newlog from "./pages/newlog";


function App() {
    const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
       {!isLoading && (
        
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/button" element={<Button />} />
      <Route path="/login" element={<Login />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/search" element={<Search/>}/>
      <Route path="/loading"element={<Loading/>}/>
      <Route path="/product"element={<Product/>}/>
      <Route path="/compared"element={<Compared/>}/>
      <Route path="/list"element={<Productlist/>}/>
      <Route path="/explore"element={<Explorepage/>}/>
      <Route path="/contacts"element={<Contacts/>}/>
      <Route path="/reels"element={<Reels/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/threeD" element={<ThreeD/>}/>
      <Route path="/page3" element={<Page3 />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/newlog" element={<Newlog />} />

    </Routes>
      )}
    </>
  );
}

export default App;
