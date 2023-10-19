import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import BrandShopRouter from './Routes/Routes.jsx';
import AuthProvider from './ProvidersForBrandShop/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={BrandShopRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
