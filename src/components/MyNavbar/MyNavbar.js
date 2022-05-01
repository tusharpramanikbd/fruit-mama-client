import React from 'react'
import './MyNavbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const MyNavbar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand
          href=''
          onClick={() => {
            navigate('/')
          }}
          style={{ cursor: 'pointer' }}
        >
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
