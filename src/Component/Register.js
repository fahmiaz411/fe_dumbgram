import {Button, Modal, Form, NavLink, Row, Col} from 'react-bootstrap'

function Register(props) {

  const {show, handleClose } = props;

    return (
      <>  
        <Modal style={{marginLeft: '40%', marginTop: '10%', width: '334px'}} show={show} onHide={handleClose}>
          <Modal.Body style={{backgroundColor: '#1F1F1F'}}>
          <Modal.Title style={{color: 'white', marginBottom: '10%', fontWeight: '700'}}>Register</Modal.Title>
          <Form>
            <Form.Group className="mb-3" style={{width: '300px'}} controlId="Email">
              <Form.Control style={{ background: '#474747', color: 'white' }} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" style={{width: '300px'}} controlId="name">
              <Form.Control style={{ background: '#474747', color: 'white' }} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" style={{width: '300px'}} controlId="username">
              <Form.Control style={{ background: '#474747', color: 'white' }} type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" style={{width: '300px'}} controlId="Password">
              <Form.Control style={{ background: '#474747', color: 'white' }} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="label">
                  <Form.Label style={{color: '#B1B1B1'}}>Already have an account ? Klik <a onClick={handleClose} href="/login" style={{color:'#B1B1B1', fontWeight: '700'}}>Here</a></Form.Label>
            </Form.Group>
            <Button className="button border-0" style={{width: '300px', height: '50px', fontWeight: '500'}} type="submit">
              Register
            </Button>
          </Form>
          </Modal.Body>          
        </Modal>
      </>
    )
}

export default Register
