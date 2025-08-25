import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/global.css'
import './assets/fonts/Poppins/fonts.css'
import AppRoutes from './routes/AppRoutes';

const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
