import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
// import Sidebar from './Components/Sidebar';
import Product from './Components/Product';
import Inbox from './Components/Inbox';
import Favorites from './Components/Favorites';
function App()
{
  return(

<div>




<Router>

<Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/Favorites" element={<Favorites />} />
      
</Routes>

    </Router>
    </div>
  );
}
    export default App;