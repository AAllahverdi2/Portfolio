import React from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './router/routes';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { LanguageProvider } from './context/LanguageContext';
const router=createBrowserRouter(Route)
const App = () => {
  return (
    
    <Provider store={store}>

      <LanguageProvider>
      <RouterProvider router={router}/>

    </LanguageProvider>
    </Provider>
      
  )
}

export default App
