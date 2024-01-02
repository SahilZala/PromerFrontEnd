import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeView from './Views/Home/home_view';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' index element={<HomeView/>}/>
      <Route path='/about' element={<>about</>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
