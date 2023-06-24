
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import About from './pages/About';
import ItemPage from './pages/ItemPage';
import Navbar from "./components/navbar/Navbar";
import SingleItem from "./pages/SingleItem";
import AddProduct from "./components/profile/AddProduct";
import FAQPage from "./pages/FAQPage";


function App() {
  return (
    <>

      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/FAQPage" element={<FAQPage />} />
          <Route exact path="/items" element={<ItemPage />} />
          <Route exact path="/create" element={<AddProduct />} />
          <Route path="/product/:id" element={<SingleItem />} />
          <Route path="/items/" element={<ItemPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />


        </Routes>

      </main>



    </>
  );
}




export default App


