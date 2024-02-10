import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartTable from './components/CartTable.jsx';
import NewOrder from './components/NewOrder.jsx';
import AddToCart from './components/AddToCart.jsx';
import ConfigureDoor from './components/ConfigureDoor.jsx';
import Progress from './components/Progress.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewOrder/>} />
        <Route path="/carttable" element={<CartTable/>} />
        <Route path="/addtocart" element={<AddToCart/>} />
        <Route path="/configuredoor" element={<ConfigureDoor/>} />
        <Route path="/progress" element={<Progress/>} />
      </Routes>
    </Router>
  );
}

export default App;
