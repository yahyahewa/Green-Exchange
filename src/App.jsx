
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import SingleItem from './components/item/SingleItem';

function App() {


  return (
    <>
      <main>
        <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleItem />} />
        </Routes>
      </main>
    </>
  )
}

export default App


      // <Routes>
      //   <Route path="/" Component={Home} />
      //   <Route path="/product" Component={Productspage} />
      //   <Route path="/product/:id" Component={Singleitem} />
      //   <Route path="/contact" Component={Contact} />
      //   <Route path="/about" Component={About} />
      //   <Route path="/login" Component={Login} />
      //   <Route path="*" Component={Notfound} />
      //   <Route path="/checkout" Component={Checkout} />
      //   <Route path="/register" Component={Regeister} />

      //   <Route path="/admin" Component={Dashbord}>
      //     <Route path="products" Component={Products}>
      //       <Route index Component={productlist} />
      //       <Route path="create-product" Component={Createproduct} />
      //     </Route>

      //     <Route path="summery" Component={Summery} />
      //     <Route path="users" Component={User} />
      //   </Route>
      // </Routes>
      // <Fotter />