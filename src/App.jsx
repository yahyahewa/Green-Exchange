
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Login from "./components/login/Login.jsx";



import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import SingleItem from './components/item/SingleItem';
import Login from './components/login/Login';
import FAQPage from "./pages/FAQPage";
import Signup from "./components/signup/Signup.jsx";
import About from './pages/About';


function App() {
  return (
    <>

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />

      </Routes> */}


      <main>
        <Navbar />
        <Routes>

          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Login />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/FAQPage" element={<FAQPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleItem />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />


        </Routes>
      </main>

    </>
  );
}

export default App


