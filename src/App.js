import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import ProductListView from './Views/ProductList/product_list_view';
import ProductDetails from './Views/ProductDetails/product_details';
import AboutUs from './Views/About/about_us';
import ContactUs from './Views/ContactUs/contact_us';
import NewHomeView from './Views/Home/new_home_view';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' index element={<NewHomeView/>}/>
      <Route path='/product' element={<ProductListView/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/product/details' element={<ProductDetails/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
