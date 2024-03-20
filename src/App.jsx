import { BrowserRouter, Routes, Route } from "react-router-dom";


import React from 'react';
// import ReactDOM from 'react-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import About from "./pages/About";
// import privateRoute from "./componentr/privateRoute";
 
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
        {/* <Route element={<PrivateRoute />} > */}
        <Route path="/profile" element={<Profile />} />
       {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
