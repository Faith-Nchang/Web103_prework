import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creators" element={<ShowCreators />} />
        <Route path="/creators/add" element={<AddCreator />} />
        <Route path="/creators/edit/:id" element={<EditCreator />} />
        <Route path="/creators/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  </StrictMode>,
)
