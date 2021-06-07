import {Row, Col, Button, Form, InputGroup, FormControl, Image, Navbar, Container, Nav, NavDropdown, DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'

import {NavLink} from 'react-router-dom'
import {useState} from 'react' 
import Notif from './Notif'

function NaviBar() {

    const [notifOpacity, setNotifOpacity] = useState(0.5)
    const [notifShow, setNotifShow] = useState(false)

    const [msgOpacity, setMsgOpacity] = useState(0.5)

    const handleNotifShow = () => 
    {
        setNotifOpacity(1)
        setNotifShow(true)
    }
    const handleNotifClose = () => 
    {
        setNotifOpacity(0.5)
        setNotifShow(false)
    }

    const notifStyles = {
        opacity: notifOpacity,
    }
    const msgStyles = {
        opacity: msgOpacity,
        width: 50
    }

    return (
        <Navbar variant="dark" expand="lg" style={{position:'fixed', background:'black', width:'75%'}}>
            <Container fluid style={{marginTop:10}}>
                {/* <Navbar.Brand href="/feed"><Image style={{marginLeft:50, width: 200}} src="/assets/DumbGram.png" /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbar-dark-example" />

                <Navbar.Collapse id="navbar-dark-example">
                    <Nav style={{marginRight:450}}>
                        <Form style={{width:'500px', padding:0}}>
                            <InputGroup className="mb-2">
                                <InputGroup.Text style={{backgroundColor: '#303030', border:0}}><Image style={{width:30}} src="/assets/feed/search.png"/></InputGroup.Text>
                                <FormControl style={{backgroundColor: '#303030', border:0, fontSize:20, color: 'white'}}id="Search" placeholder="Search" />
                            </InputGroup>
                        </Form>
                    </Nav>
                    <Nav onClick={handleNotifShow} className="me-3" style={{opacity:`${notifOpacity}`}}>                                                  
                        <Image style={{background: '', width:50}} src="/assets/feed/notif.png" /> 
                        <Image style={{ marginTop:20, width:10, height: 10}} src="/assets/ticks.png" />
                    </Nav>
                    <Nav>
                        <NavLink onClick={() => setMsgOpacity(1)} onMouseOut={() => setMsgOpacity(0.5)} className="ms-3 me-5 mt-1" to="/message">
                            <Image style={msgStyles} src="/assets/feed/share.png" />
                        </NavLink>
                        <NavLink className="mt-1" to="/create-post">
                            <Button className="button border-0" style={{width: 200, height:50, fontSize: 20, fontWeight: 500}}>
                                <InputGroup>
                                    <InputGroup.Text style={{marginRight: 20, backgroundColor: '#303030', border:0, opacity:0.7}}><Image style={{width:20}} src="/assets/feed/plus.png"/></InputGroup.Text>
                                    Create Post
                                </InputGroup>
                            </Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Notif show={notifShow} handleClose={handleNotifClose} />
        </Navbar>
    )
}

export default NaviBar
