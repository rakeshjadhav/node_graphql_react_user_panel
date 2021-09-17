import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { gql, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $user_email: String!
    $password: String!
    $user_firstname: String!
    $user_lastname: String!
  ) {
    register(
      username: $username
      user_email: $user_email
      password: $password
      user_firstname: $user_firstname
      user_lastname : $user_lastname
    ) {
      username
      user_email
      user_firstname
      user_lastname
      createdAt
    }
  }
`

export default function Register(props) {
  const [variables, setVariables] = useState({
    user_email: '',
    username: '',
    password: '',
    user_firstname: '',
    user_lastname: '',
  })
  const [errors, setErrors] = useState({})

  console.log('erroree');
  console.log(errors);
  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update: (_, __) => props.history.push('/login'),
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
  })

  const submitRegisterForm = (e) => {
    e.preventDefault()
   console.log(variables);
    registerUser({ variables })
  }

  return (
    <Form className="bg-white py-5 justify-content-center" onSubmit={submitRegisterForm}>
      <h1 className="text-center">Register</h1>
          <Row className="mb-3" style={{marginRight: "-0x",marginLeft: '0px'}}>
            <Form.Group as={Col} controlId="formGridEmail">
              
            <Form.Label className={errors.user_firstname && 'text-danger'}>{errors.user_firstname ?? 'User firstname'}</Form.Label>
                    
                    <Form.Control  type="text"  value={variables.user_firstname} className={errors.user_firstname && 'is-invalid'}
                      onChange={(e) =>
                        setVariables({
                          ...variables,
                          user_firstname: e.target.value,
                        })
                      }
                    />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className={errors.user_lastname && 'text-danger'}>{errors.user_lastname ?? 'User lastname'}</Form.Label>
                    <Form.Control  type="text"  value={variables.user_lastname}  className={errors.user_lastname && 'is-invalid'}
                      onChange={(e) =>
                        setVariables({
                          ...variables,
                          user_lastname: e.target.value,
                        })
                      }
                    />
            </Form.Group>
          </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1" style={{marginRight: "-0x",marginLeft: '0px',paddingLeft : '15px'}}>
  <Form.Label className={errors.user_email && 'text-danger'}>{errors.user_email ?? 'Email address'} </Form.Label>
            <Form.Control  type="email" value={variables.user_email} className={errors.user_email && 'is-invalid'}
              onChange={(e) =>
                setVariables({ ...variables, user_email: e.target.value })
              }
            />
  </Form.Group>

 

  <Row className="mb-3" style={{marginRight: "-0x",marginLeft: '0px'}}>


  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label className={errors.username && 'text-danger'}> {errors.username ?? 'Username'} </Form.Label>
            <Form.Control type="text"  value={variables.username}  className={errors.username && 'is-invalid'}
              onChange={(e) =>
                setVariables({ ...variables, username: e.target.value })
              }
            />
            </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">

    <Form.Label className={errors.password && 'text-danger'}>
              {errors.password ?? 'Password'}
            </Form.Label>
            <Form.Control
              type="password"
              value={variables.password}
              className={errors.password && 'is-invalid'}
              onChange={(e) =>
                setVariables({ ...variables, password: e.target.value })
              }
            />
    </Form.Group>
  </Row>
<Row style={{paddingLeft : '15px'}}>
  <Form.Group className="mb-3" id="formGridCheckbox"  style={{paddingLeft : '25px'}} >
  Already have an account? <Link to="/login">Login</Link>
  </Form.Group>

  <Button variant="success" type="submit" className="text-center" > 
            {/* disabled={loading}
              {loading ? 'loading..' : 'Register'} */}
              Register
            </Button>
            </Row>
</Form>
  )
}
