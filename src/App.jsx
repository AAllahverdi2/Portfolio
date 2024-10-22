// import React from 'react';

// const App = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <a 
//         href="https:1drv.ms/b/s!Aj7YPMiiYJGLcRh3LVacmcgB5dA?e=xZbN09" 
//         download 
//         style={{ fontSize: '18px', textDecoration: 'underline', color: 'blue' }}
//       >
//         Yeni CV-ni Yüklə
//       </a>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './router/routes';
const router=createBrowserRouter(Route)
const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
