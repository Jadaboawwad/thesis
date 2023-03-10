import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from 'App'
import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import OurLands from 'pages/OurLands/OurLands'
import OurSuppliers from 'pages/OurSuppliers/OurSuppliers'
import Products from 'pages/Products/Products'

import { appText } from 'data/appText'

import 'styles/index.css'
import 'styles/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={appText.links[0]} element={<App />} />
        <Route path={appText.links[1]} element={<AboutUs />} />
        <Route path={appText.links[2]} element={<OurLands />} />
        <Route path={appText.links[3]} element={<OurSuppliers />} />
        <Route path={appText.links[4]} element={<Products />} />
        <Route path={appText.links[5]} element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
