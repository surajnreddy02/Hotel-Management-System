// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Layout from './Layout';
// import { Dashboard, Contact, Rooms, Services, RoomsInfo, Reviews, Login, Signup } from './index';
// import Store from "./store/Store"
// import React from "react";
// import { Provider } from "react-redux";
// import { AdminDashboard, AdminHeader } from "./Components/adminPanel/adminIndex"

// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Dashboard />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='rooms' element={<Rooms />}>
//         <Route path='roomInfo' element={<RoomsInfo />} />
//       </Route>
//       <Route path='reviews' element={<Reviews />} />
//       <Route path='services' element={<Services />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <RouterProvider router={route} />
//     </Provider>
//   </React.StrictMode>,
// );
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
// layout's
import Layout from './Layout';
import AdminLayout from "./Components/adminPanel/AdminLayout";
// redux store
import Store from "./store/Store";
import { Provider } from "react-redux";

// importing components
import { Dashboard, Contact, Rooms, Services, RoomsInfo, Reviews, Login, Signup } from './index';
import { AdminDashboard, AdminDepartment, AdminEmployee, AdminRooms, AdminHeader } from "./Components/adminPanel/adminIndex"

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='contact' element={<Contact />} />
        <Route path='rooms' element={<Rooms />}>
          <Route path='roomInfo' element={<RoomsInfo />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
        <Route path='services' element={<Services />} />
      </Route>
      {/* USER ROUTES OVER--------------------------> */}
      {/* The admin routes are from here */}
      <Route path='/admin' element={<AdminLayout />}>

        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="rooms" element={<AdminRooms />} />
        <Route path="departments" element={<AdminDepartment />} >
          {/* <Route path=":deptId" element={<AdminEmployee/>} /> */}
          {/* <Route path="admin/departments/:deptId" element={<AdminEmployee />} /> */}

        </Route>


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
