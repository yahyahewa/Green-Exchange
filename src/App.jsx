
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import FAQPage from "./pages/FAQPage";
import Navbar from './components/navbar/Navbar';
import SingleItem from './pages/SingleItem';
import ItemPage from './pages/ItemPage'
import AddProduct from "./components/profile/AddProduct";
import Profile from './components/profile/profile'


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
          <Route exact path="/create" element={<AddProduct />} />
          <Route path="/product/:id" element={<SingleItem />} />
          <Route path="/profile/:username" element={<Profile />} />



          {/* <Route path="/admin" element={Dashbord}>
            <Route path="products" element={Products}> */}
          {/* <Route index element={productlist} /> */}
          {/* </Route>

            <Route path="summery" Component={Summery} />
            <Route path="users" Component={User} />
          </Route> */}

        </Routes>

      </main>



    </>
  );
}




export default App


