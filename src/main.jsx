import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { Dashboard, Contact, Rooms, Services, RoomsInfo, Reviews, Login, Signup } from './index';

import React from "react";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path='contact' element={<Contact />} />
      <Route path='rooms' element={<Rooms />}>
        <Route path='roomInfo' element={<RoomsInfo />} />
      </Route>
      <Route path='reviews' element={<Reviews />} />
      <Route path='services' element={<Services />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
