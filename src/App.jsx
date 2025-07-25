
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import ProductList from './components/ProductList'
import Navbar2 from './components/Navbar2'
import SingleProduct from './components/SingleProduct'
import About from './components/About'

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Home/><Footer/></>
  },
  {
    path:'/footwear',
    element: <><Navbar2/><ProductList category="footwear"/><Footer/></>
  },
  {
    path:'/wallet',
    element: <><Navbar2/><ProductList category="wallet"/><Footer/></>
  },
  {
    path:'/belts',
    element: <><Navbar2/><ProductList category="belts"/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Navbar2/><Contact/><Footer/></>
  },
  {
    path: "/about",
    element: <><Navbar2/><About/><Footer/></>
  },
  {
    path: "/products/:productId",
    element: <><Navbar2/><SingleProduct/><Footer/></>
  },
  {
    path:'/cart',
    element: <><Navbar2/><Cart/><Footer/></>
  },
 
])

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 1.5,
      }}
      >
     <RouterProvider router={router}/>
     </UpdateFollower>
    </main>
  )
}

export default App
