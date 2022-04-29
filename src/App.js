import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import SignIn from './pages/Login/SignIn/SignIn'
import SignUp from './pages/Login/SignUp/SignUp'
import NotFound from './pages/NotFound/NotFound'
import MyNavbar from './components/MyNavbar/MyNavbar'

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
