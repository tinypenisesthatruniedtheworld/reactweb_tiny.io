import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import './assets/theme-dark/dark.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ScrollToTop} from './components/ScrollToTop';
import {
  Routes,
  Route
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import BuyScreen from './screens/BuyScreen';

const App = () => {
  return (
  <>
<Header />
    <main className="pt-5">
    <ScrollToTop />
      <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/gallery" element={<GalleryScreen />} />
              <Route path="/buy" element={<BuyScreen />} />
      </Routes>
    </main>          
<Footer />
</>
    );
}

export default App;
