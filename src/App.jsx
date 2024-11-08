


import React from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './router/routes';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
const router=createBrowserRouter(Route)
const App = () => {
  return (
    <Provider store={store}>

      <RouterProvider router={router}/>

    </Provider>
      
  )
}

export default App
