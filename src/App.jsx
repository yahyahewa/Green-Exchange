
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';


function App() {


  return (
    <>
    <main>
     <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      </Routes>
    </main>
    </>
  )
}

export default App
