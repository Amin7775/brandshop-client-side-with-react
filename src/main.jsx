import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/home'
import Login from './pages/Login/Login'
import AddProducts from './pages/AddProducts/AddProducts'
import MyCart from './pages/MyCart/MyCart'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import UpdateProducts from './pages/UpdateProducts/UpdateProducts'
import AuthProvider from './provider/AuthProvider'
import PrivateRoute from './privateRoute/PrivateRoute'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const route = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/brand'),
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/addProducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/brand/:brand/update/:name/:id',
        element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
      ,
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=>fetch("http://localhost:5000/cart")
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/brand/:brand_name',
        element: <Products></Products>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: '/brand/:brand/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
