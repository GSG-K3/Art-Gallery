import React from 'react';
import Home from './Components/Common/homePage/Home'
import CategorisSlider from './Components/Common/categoriesSlider/CategoriesSlider'
import RecentArtSlider from './Components/Common/RecentArtSlider/RecentArtSlider'
import Header from './Components/Common/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <RecentArtSlider />    
      <Home/>
      <CategorisSlider/>
    </div>
  );
}

export default App;
