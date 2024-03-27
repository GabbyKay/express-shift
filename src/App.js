import React from "react";
import Home from "./components/main/home/Home";
import { Route, Routes } from 'react-router-dom';
import Abouthome from "./components/main/section/about/Abouthome";
import Aboutpage from "./components/pages/Aboutpage/Aboutpage";
import Newspage from "./components/pages/Newspage/Newspage";
import Servicespage from "./components/pages/Servicespage/Servicespage";
import ContactPage from "./components/pages/contactpage/ContactPage";
import CartPage from "./components/pages/cartpage/CartPage";
import Airfreight from "./components/main/section/services_sec/Airfreight/Airfreight";
import Roadservice from "./components/main/section/services_sec/Roadservice/Roadservice";
import Seafreight from "./components/main/section/services_sec/Seafreight/Seafreight";
import Warehousing from "./components/main/section/services_sec/Warehousing/Warehousing";
import RequestQuote from "./components/pages/RequestQuote/RequestQuote";
import FAQPage from "./components/pages/FAQpage/FAQPage";
// import Readmore_aboutus from "./components/pages/Aboutpage/Readmore_aboutus";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<Abouthome/>}/>
      <Route path="/Aboutpage" element={<Aboutpage/>}/>
      <Route path="/Newspage" element={<Newspage/>} />
      <Route path='/Servicespage' element={<Servicespage/>}/>
      <Route path="/ContactPage" element={<ContactPage/>}/>
      <Route path="CartPage" element={<CartPage/>}/>
      <Route path = 'Airfreight' element={<Airfreight/>}/>
      <Route path="Roadservice" element={<Roadservice/>} />
      <Route path="Seafreight" element={<Seafreight/>} />
      <Route path="Warehousing" element={<Warehousing/>} />
      <Route path="RequestQuote" element={<RequestQuote/>} />
      <Route path="FAQpage" element={<FAQPage/>} />
    </Routes>
  );
}

export default App;
