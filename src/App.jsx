
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
<<<<<<< HEAD
import FAQPage from "./pages/FAQPage";
import Navbar from './components/navbar/Navbar';
import SingleItem from './pages/SingleItem';
import ItemPage from './pages/ItemPage'
import AddProduct from "./components/profile/AddProduct";
import Profile from './components/profile/profile'
=======
import About from './pages/About';
import ItemPage from './components/item/ItemPage';
>>>>>>> origin/ehsan


function App() {
  return (
    <>
<<<<<<< HEAD
      <main className="overflow-hidden ">
=======

      <main>
>>>>>>> origin/ehsan
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/FAQPage" element={<FAQPage />} />
          <Route exact path="/items" element={<ItemPage />} />
          <Route exact path="/create" element={<AddProduct />} />
          <Route path="/product/:id" element={<SingleItem />} />
<<<<<<< HEAD
          <Route path="/profile/:username" element={<Profile />} />
=======
          <Route path="/items/" element={<ItemPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
>>>>>>> origin/ehsan


        </Routes>

      </main>



    </>
  );
}




export default App


