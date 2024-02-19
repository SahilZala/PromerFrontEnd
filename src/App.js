import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeView from './Views/Home/home_view';
import ProductListView from './Views/ProductList/product_list_view';
import ProductDetails from './Views/ProductDetails/product_details';
import AboutUs from './Views/About/about_us';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' index element={<HomeView/>}/>
      <Route path='/product' element={<ProductListView/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/product/details' element={<ProductDetails/>}/>
    
    </Routes>
   </BrowserRouter>
  );
}

export default App;
