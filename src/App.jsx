
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import FAQPage from "./pages/FAQPage";



import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import SingleItem from './components/item/SingleItem';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
      </Routes>


      <main>
        <Navbar />
        <Routes>
 <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleItem />} />
        </Routes>
      </main>

    </>
  );
}

export default App


