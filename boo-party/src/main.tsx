import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import { Confirmation } from './pages/confirmation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/confimation_participation" element={<Confirmation />}/>
      </Routes>
	</BrowserRouter>
  </React.StrictMode>,
)
