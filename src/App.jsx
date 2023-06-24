
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import FAQPage from "./pages/FAQPage";
import Navbar from './components/navbar/Navbar';
import SingleItem from './pages/SingleItem';
import ItemPage from './pages/ItemPage'



function App() {
  return (
    <>
     <main>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/items" element={<ItemPage />} />
        <Route path="/product/:id" element={<SingleItem />} />
      </Routes>

      </main>

      

    </>
  );
}

export default App


