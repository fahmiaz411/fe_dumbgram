import {Row, Col, Image, Card, Nav} from 'react-bootstrap'
import {useState} from 'react'
import DetailFeed from '../Component/DetailFeed'
import Profile from '../Component/Profile'
import {NavLink} from 'react-router-dom'
import Edit from '../Component/Edit'
import NaviBar from '../Component/NaviBar'
import Brand from '../Component/Brand'

function Feed() {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div>
        
        <Row>
            <Col sm={3} className="">
                <Brand />
                <Edit />
                <Profile />
            </Col>

            <div style={{width: '1px', height: '1500px', backgroundColor: '#212121', padding:0}} />

            <Col style={{}}>
                <NaviBar />
                <div className="ms-5">
                <div style={{marginTop: 60, marginBottom: 40, fontSize: 60}}>
                    Feed
                </div>
                <Row style={{width: '98%',backgroundColor: ''}}>
                    <Col style={{backgroundColor: '', padding:0}}>
                        <div className="mb-3">
                            <Card.Img style={{marginBottom: '2%'}} src="/assets/foto4.png" />
                            <Row>
                                    <Col>                                
                                        <Nav.Link style={{background: '', width:80, padding:0}} className="" href="/feed/zayn">
                                            <Image style={{width:30, marginRight:10}} src="/assets/users/zayn.png" />
                                            <a style={{color: 'white'}}>zayn</a>
                                        </Nav.Link>
                                    </Col>

                                    <Col>
                                    <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                    <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                    <Image style={{width: 20}} src="/assets/feed/share.png" />
                                    </Col>            
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                126.100 Like
                            </div>
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/feed/f1.png" />
                            <Row className="mt-2 mb-2">
                                    <Col>                                
                                        <Nav.Link style={{background: '', width:90, padding:0}} className="" href="#">
                                            <Image style={{width:30, marginRight:10}} src="/assets/users/egi_lol.png" />
                                            <a style={{color: 'white'}}>egi_lol</a>
                                        </Nav.Link>
                                    </Col>

                                    <Col>
                                    <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                    <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                    <Image style={{width: 20}} src="/assets/feed/share.png" />
                                    </Col> 
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                71.500 Like
                            </div>
                        </div>
                    </Col>
                    <Col style={{backgroundColor: '', padding:0, marginLeft: '1%'}}>
                        <div className="mb-3">
                            <Card.Img onClick={handleShow} style={{ marginBottom: '2%'}} src="/assets/foto7.png" />
                            <Row className="">
                                <Col>                                
                                    <Nav.Link style={{background: '', width:80, padding:0}} className="" href="/feed/zayn">
                                        <Image style={{width:30, marginRight:10}} src="/assets/users/zayn.png" />
                                        <a style={{color: 'white'}}>zayn</a>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                <Image style={{width: 20}} src="/assets/feed/share.png" />
                                </Col>  
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                156.290 Like
                            </div>
                        </div>
                        <div className="mb-3">
                            <Card.Img style={{ marginBottom: '2%'}} src="/assets/foto1.png" />
                            <Row>
                                <Col>                                
                                    <Nav.Link style={{background: '', width:130, padding:0}} className="" href="#">
                                        <Image style={{width:30, marginRight:10}} src="/assets/users/beach_lover.png" />
                                        <a style={{color: 'white'}}>beach_lover</a>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                <Image style={{width: 20}} src="/assets/feed/share.png" />
                                </Col> 
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                131.230 Like
                            </div>
                        </div>
                    </Col>
                    <Col style={{backgroundColor: '', padding:0, marginLeft: '1%'}}>
                        <div className="mb-3">
                            <Card.Img style={{ marginBottom: '2%'}} src="/assets/foto5.png" />
                            <Row>
                                <Col>                                
                                    <Nav.Link style={{background: '', width:80, padding:0}} className="" href="/feed/zayn">
                                        <Image style={{width:30, marginRight:10}} src="/assets/users/zayn.png" />
                                        <a style={{color: 'white'}}>zayn</a>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                <Image style={{width: 20}} src="/assets/feed/share.png" />
                                </Col>  
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                136.000 Like
                            </div>
                        </div>
                        <div className="mb-3">
                            <Card.Img style={{ marginBottom: '2%'}} src="/assets/foto3.png" />
                            <Row>
                                <Col>                                
                                    <Nav.Link style={{background: '', width:90, padding:0}} className="" href="#">
                                        <Image style={{width:30, marginRight:10}} src="/assets/users/egi_lol.png" />
                                        <a style={{color: 'white'}}>egi_lol</a>
                                    </Nav.Link>
                                </Col>

                                <Col>
                                <Image style={{marginLeft: 120,width: 20, marginRight:10}} src="/assets/feed/like.png" />
                                <Image style={{width: 20, marginRight:10}} src="/assets/feed/comment.png" />
                                <Image style={{width: 20}} src="/assets/feed/share.png" />
                                </Col> 
                            </Row>
                            <div align="right" className="mt-2" style={{fontSize: 20, color: 'grey'}}>
                                131.000 Like
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Col>
        </Row>
        <DetailFeed show={show} handleClose={handleClose}/>
        </div>
    )
}

export default Feed
