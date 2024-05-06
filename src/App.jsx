
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Loginpage from './Pages/LoginPage/Loginpage'
import Register from './Pages/Register/Register'
import Home from './Pages/Homepage/Home'

const route=  createBrowserRouter([
  {path:"/" ,element:<Loginpage />},
  {path:"/register",element:<Register />},
  {path:"/home",element:<Home />},

])
function App() {


  return (
    <>
  <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
