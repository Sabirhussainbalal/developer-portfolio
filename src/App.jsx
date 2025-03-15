import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import  { Home }  from "./pages/home";
import  Navbar  from "./components/nav"; 



const App = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };


  return (
    <BrowserRouter>
      <ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
  toastClassName="custom-toast"
  progressClassName="custom-toast-progress"
  containerStyle={{ zIndex: 30 }}  // Lower than navbar's z-50
/>
      <Navbar open={open} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path="*" element={<Home open={open} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
