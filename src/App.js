import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import SignIn from './pages/Login/SignIn/SignIn'
import SignUp from './pages/Login/SignUp/SignUp'
import NotFound from './pages/NotFound/NotFound'
import MyNavbar from './components/MyNavbar/MyNavbar'
import Inventory from './pages/Inventory/Inventory'
import ManageInventory from './pages/ManageInventory/ManageInventory'
import AddInventoryItem from './pages/AddInventoryItem/AddInventoryItem'
import MyItems from './pages/MyItems/MyItems'
import ResetPassword from './pages/Login/ResetPassword/ResetPassword'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route
          path='inventory/:id'
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path='/manageinventory'
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path='/addinventoryitem'
          element={
            <RequireAuth>
              <AddInventoryItem />
            </RequireAuth>
          }
        />
        <Route
          path='/myitems'
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
