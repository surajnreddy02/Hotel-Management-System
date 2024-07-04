import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'
import { Dashboard, Contact, Rooms, Gallery, Services } from './index.js'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='rooms' element={<Rooms />}></Route>
      <Route path='gallery' element={<Gallery />}></Route>
      <Route path='services' element={<Services />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
