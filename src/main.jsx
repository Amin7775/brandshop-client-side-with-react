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

const route = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
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
        element: <AddProducts></AddProducts>
      },
      {
        path: '/brand/:brand/update/:name/:id',
        element: <UpdateProducts></UpdateProducts>,
        loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
      ,
      {
        path:'/myCart',
        element:<MyCart></MyCart>
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
        element: <ProductDetails></ProductDetails>,
        loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
