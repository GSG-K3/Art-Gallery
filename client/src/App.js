import React from 'react';
import Home from './Components/Common/homePage/Home'

import RecentArtSlider from './Components/Common/RecentArtSlider/RecentArtSlider'
import Header from './Components/Common/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <RecentArtSlider />    
      <Home/>
    </div>
  );
}

export default App;
