import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Newproduct from './pages/Newproduct';
import Signup from './pages/Signup';
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from './pages/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}/>
      {/* <Route path="menu" element={<Menu/>}/> */}
      <Route path="menu/:filterby" element={<Menu/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="newproduct" element={<Newproduct/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
)