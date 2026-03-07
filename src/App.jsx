import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import LeadEnquiryPage from './pages/LeadEnquiryPage'
import LeadAssignPage from './pages/LeadAssignPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<LeadEnquiryPage />} />
          <Route path="/assign" element={<LeadAssignPage />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  )
}

export default App
