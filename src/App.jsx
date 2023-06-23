import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
      </Routes>
    </>
  );
}

export default App;
