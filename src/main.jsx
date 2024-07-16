
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
// layout's
import Layout from './Layout';
import AdminLayout from "./Components/adminPanel/AdminLayout";
// redux store    
import Store from "./store/Store.js";
import { Provider } from "react-redux";

// importing components
import { Dashboard, Contact, Rooms, Services, RoomsInfo, Reviews, Login, Signup, Payment, Logout } from './index';
import { AdminDashboard, AdminDepartment, AdminEmployee, AdminRooms, AdminHeader } from "./Components/adminPanel/adminIndex"

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="logout" element={<Logout />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='contact' element={<Contact />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='rooms/:roomId' element={<RoomsInfo />} />
        <Route path='rooms/:roomId/payment' element={<Payment />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='services' element={<Services />} />
      </Route>
      {/* USER ROUTES OVER--------------------------> */}
      {/* The admin routes are from here */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="rooms" element={<AdminRooms />} />
        <Route path="departments" element={<AdminDepartment />} />
        <Route path="departments/:deptId" element={<AdminEmployee />} />

      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>,
);
