import {Button, Modal, Form} from 'react-bootstrap'
import {useState} from 'react'
import PrivateRoute from './PrivateRoute';

function Login(props) {

  const user = {
    email: 'fa@gmail',
    password: '1234'
  }

  const {show, handleClose } = props;
  
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  
  const {email, password} = data
  const [login, setLogin] = useState(false)
  
  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setLogin(true)
    setData({
      email: '',
      password: ''
    })

  }

    return (
      <>
        <Modal style={{marginLeft: '40%', marginTop: '10%', width: '334px'}} show={show} onHide={handleClose}>
          <Modal.Body style={{backgroundColor: '#1F1F1F'}}>
          <Modal.Title style={{color: 'white', marginBottom: '10%', fontWeight: '700'}}>Login</Modal.Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" style={{width: '300px'}} controlId="Email">
              <Form.Control onChange={handleOnChange} name="email" value={email} style={{ background: '#474747', color: 'white' }} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" style={{width: '300px'}} controlId="Password">
              <Form.Control onChange={handleOnChange} name="password" value={password} style={{ background: '#474747', color: 'white' }} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="label">
              <Form.Label style={{color: '#B1B1B1'}}>Don't have an account ? Klik Here <a onClick={handleClose} href="/register" style={{color:'#B1B1B1', fontWeight: '700'}}>Here</a></Form.Label>
            </Form.Group>
            <Button className="button border-0" style={{width: '300px', height: '50px', fontWeight: '500'}} type="submit">
              Login
              {/* <PrivateRoute login={login} /> */}
            </Button>
          </Form>
          </Modal.Body>     
        </Modal>
      </>
    )
}

export default Login
