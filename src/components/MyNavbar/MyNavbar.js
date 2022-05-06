import React from 'react'
import './MyNavbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'
import logo from '../../images/fruit.png'

const MyNavbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth)
  }
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand
          href=''
          onClick={() => {
            navigate('/')
          }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logo}
            width='40'
            height='40'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
          Fruit Mama
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/'
            >
              Home
            </NavLink>

            {/* Conditional rendering */}
            {/* If the use is present manage items, add item and my items links will be visible */}
            {user ? (
              <Nav>
                <NavLink
                  className='navbar-links'
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'white' : '',
                    }
                  }}
                  to='/manageinventory'
                >
                  Manage Items
                </NavLink>

                <NavLink
                  className='navbar-links'
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'white' : '',
                    }
                  }}
                  to='/addinventoryitem'
                >
                  Add Item
                </NavLink>

                <NavLink
                  className='navbar-links'
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'white' : '',
                    }
                  }}
                  to='/myitems'
                >
                  My Items
                </NavLink>
              </Nav>
            ) : null}

            <NavLink
              className='navbar-links'
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : '',
                }
              }}
              to='/blogs'
            >
              Blogs
            </NavLink>

            {/* Conditional rendering */}
            {/* If the use is present only signout button will be visible */}
            {user ? (
              <button onClick={handleSignout} className='btn-signout'>
                Signout
              </button>
            ) : (
              <Nav>
                <NavLink
                  className='navbar-links'
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'white' : '',
                    }
                  }}
                  to='/signin'
                >
                  SignIn
                </NavLink>

                <NavLink
                  className='navbar-links'
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'white' : '',
                    }
                  }}
                  to='/signup'
                >
                  SignUp
                </NavLink>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
