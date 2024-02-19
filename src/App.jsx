/*import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; // Don't forget to import React if you're using JSX
import SignIn from './pages/SignIn';
import Profle from './pages/Profle';
import About from './pages/About';
import SignUP from './pages/SignUP';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" sign-in={<SignIn />} />
        <Route path="/" sign-up={<SignUP />} />
        <Route path="/" profile={<Profle />} />
        <Route path="/" aboutt={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

// Example component for the home page
function Home() {
  return <h1>Home Page</h1>;
}
*/






















import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; 
import SignIn from './pages/SignIn';
import Profile from './pages/Profile'; 
import About from './pages/About';
import SignUp from './pages/SignUP'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} /> {}
        <Route path="/signup" element={<SignUp />} /> {}
        <Route path="/profile" element={<Profile />} /> {}
        <Route path="/about" element={<About />} /> {}
      </Routes>
    </BrowserRouter>
  );
}

// Example component for the home page
function Home() {
  return <h1>Home Page</h1>;
}
