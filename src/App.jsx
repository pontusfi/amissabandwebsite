import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MemberPage from './pages/MemberPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/members/:slug" element={<MemberPage />} />
    </Routes>
  )
}
