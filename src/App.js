import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/new-post" element={<CreatePost />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Outlet />
    </>
  )
}

export default App
