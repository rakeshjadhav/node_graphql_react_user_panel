import React, { Fragment, useEffect } from 'react'
import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gql, useSubscription } from '@apollo/client'

import { useAuthDispatch, useAuthState } from '../../context/auth'

import Users from './Users'



export default function Home({ history }) {
  const authDispatch = useAuthDispatch()


  const { user } = useAuthState()


  const logout = () => {
    authDispatch({ type: 'LOGOUT' })
    window.location.href = '/login'
  }

  return (
    <Fragment>
      <Row className="bg-white justify-content-around mb-1">
        <Link to="/login">
          <Button variant="link">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="link">Register</Button>
        </Link>
        <Button variant="link" onClick={logout}>
          Logout
        </Button>
      </Row>
      <Row className="bg-white">
        <Users />
   
      </Row>
    </Fragment>
  )
}
