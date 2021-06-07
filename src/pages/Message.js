import {Row, Col, Image, Form} from 'react-bootstrap'
import {useState} from 'react'
import Profile from '../Component/Profile'
import NaviBar from '../Component/NaviBar'
import Brand from '../Component/Brand'

function Message() {
    const [egi, setEgi] = useState(false)

    return (
        <div>
        <Row>
            <Col sm={3}>
                <div style={{position: 'fixed'}}>                    
                <Row>
                    <Brand />
                </Row>
                <Row onClick={() => setEgi(true)} style={{marginTop: 0, backgroundColor: ''}}>
                    <Col sm={2} style={{marginLeft:50, marginRight:10, backgroundColor: ''}}>
                        <Image style={{width:60}} src="/assets/users/egi_lol.png" />
                    </Col>
                    <Col style={{backgroundColor: ''}}>
                        <div style={{backgroundColor: ''}}>
                            egi_lol
                        </div>
                        <div style={{marginTop:10, backgroundColor: '', color: '#ABABAB'}}>
                            Hello Lisa
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 50, backgroundColor: ''}}>
                    <Col sm={2} style={{marginLeft:50, marginRight:10, backgroundColor: ''}}>
                        <Image style={{width:60}} src="/assets/users/beach_lover.png" />
                    </Col>
                    <Col style={{backgroundColor: ''}}>
                        <div style={{backgroundColor: ''}}>
                            beach_lover
                        </div>
                        <div style={{marginTop:10, backgroundColor: '', color: '#ABABAB'}}>
                            Hello Lisa, when do you go to the beach
                        </div>
                    </Col>
                </Row>
                </div>
            </Col>

            <div style={{position: 'sticky', width: '1px', height: '950px', backgroundColor: '#212121', padding:0}} />

            {egi ? 

                <>
                    <Col>
                        <NaviBar />
                        <div className="ms-5" style={{marginTop:'52%'}}>
                            <div>
                                <Image style={{width:50, marginRight:20}} src="/assets/users/egi_lol.png" />
                                <a style={{color:'#ABABAB', fontSize:20}}>Hello Lisa</a>
                            </div>
                            <div className="mt-5" style={{}}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Control className="border-0" style={{ width:'69%', position: 'fixed', background: '#303030', color: 'white', height:60, fontSize:20 }} type="text" placeholder="Send Message" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </>

                :

                <>
                    <Col style={{backgroundColor:''}}>
                        <NaviBar />
                        <div style={{marginTop:'20%', marginLeft: '30%', fontSize:100}}>
                            No Message
                        </div>
                    </Col>
                </>

            }
        </Row>
        </div>
    )
}

export default Message
