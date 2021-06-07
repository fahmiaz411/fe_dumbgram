import {Row, Col, Container, Image, Button, Card, Dropdown, DropdownButton, ButtonGroup, SplitButton} from 'react-bootstrap'
import '../css/Global.css'
import {useState} from 'react'
import Login from '../Component/Login'
import Register from '../Component/Register'

import data from '../Component/data'

function LandingPage(props) {

    const { shows } = props     
    const image = '/assets'
    
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    
    const handleLoginShow = () => setLoginShow(true);
    const handleRegisterShow = () => setRegisterShow(true)
    
    const handleLoginClose = () => setLoginShow(false);
    const handleRegisterClose = () => setRegisterShow(false)
    return (
        <div>
        <Row>
            <Col>
                <Container style={{marginLeft: '150px'}}> 
                    <Image
                        src="/assets/DumbGram.png"
                        alt=""
                        style={{
                            width: '500px',
                            height: 'auto',
                            marginTop: '100px'
                        }}
                    />
                    <p
                        style={{
                            fontSize: '80px',
                            marginTop: '100px',
                            lineHeight: '100px',
                            width: '600px'

                            // fontFamily: 'avenir',
                        }}
                    >
                       Share your best photos or videos 
                    </p>

                    <p
                        style={{
                            color: '#6A6A6A',
                            fontSize: '30px',
                            width: '600px'
                        }}
                    >
                        Join now, share your creations with another people and enjoy other creations.
                    </p>

                    <Button onClick={handleLoginShow} className="button border-0 mt-3" style={{fontSize: '20px'}}>Login</Button>                        
                    <Button onClick={handleRegisterShow} className="btn-register btn-secondary ms-3 mt-3 border-0" style={{backgroundColor: '#333333',fontSize: '20px'}}>Register</Button>                        
                </Container>
            </Col>
            <Col md={6} style={{marginTop: '4%'}} >
                <Row>
                    <Col sm={3} style={{marginRight: '10px', padding: '0'}}>
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto4.png`} alt="" />
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto3.png`} alt="" />
                        <Card.Img style={{marginBottom: '100px'}} src={`${image}/foto7.png`} alt="" />
                    </Col>
                    <Col sm={3} style={{marginRight: '10px', padding: '0'}}>
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto1.png`} alt="" />
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto6.png`} alt="" />
                    </Col>
                    <Col sm={3} style={{marginLeft: '0px', padding: '0'}}>
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto2.png`} alt="" />
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto5.png`} alt="" />
                        <Card.Img style={{marginBottom: '10px'}} src={`${image}/foto8.png`} alt="" />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Login ref={shows} show={loginShow} handleClose={handleLoginClose}/>
        <Register ref={shows} show={registerShow} handleClose={handleRegisterClose} />
        </div>
    )
}

export default LandingPage
