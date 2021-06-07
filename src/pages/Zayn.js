/* eslint-disable jsx-a11y/anchor-is-valid */
import {Row, Col, Image, Card, Nav, Button} from 'react-bootstrap'
import {useState} from 'react'
import DetailFeed from '../Component/DetailFeed'
import NaviBar from '../Component/NaviBar'
import Brand from '../Component/Brand'

function Zayn() {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [feedOp, setFeedOp] = useState(0.5)
    const [exploreOp, setExploreOp] = useState(0.5)
    
    const [logoutOp, setLogoutOp] = useState(0.5)

    return (
        <div>
        
        <Row>
            <Col sm={3} className="">
                <Brand />
                <div style={{position: 'fixed', width:440, marginTop:10}}>
                    <div>                
                        <div align="center">
                            <Image style={{width: '45%'}} src="/assets/users/zayn.png" />
                        </div>
                        <div align="center" style={{marginTop: '10px', fontSize: 30, fontWeight: 500}}>
                            Zayn Malik
                        </div>
                        <div align="center" style={{color: '#ABABAB'}}>
                            @zayn
                        </div>
                        <div align="center" className="mt-4">
                            <Button 
                                href="/message/zayn"                                
                                className="button border-0"
                                style={{
                                    width: 150,
                                    height: 50,
                                    fontSize:24,
                                    fontWeight: 500,
                                    marginRight:10
                                }}
                                type="">
                                Message
                            </Button>
                            <Button 
                                href="#"
                                className="btn-secondary border-0"
                                style={{
                                    background:'',
                                    width: 150,
                                    height: 50,
                                    fontSize:24,
                                    fontWeight: 500
                                }}
                                type="">
                                Unfollow
                            </Button>
                        </div>
                        <div style={{marginTop: '50px'}}>
                            <Row align="center" style={{color:'#ABABAB', fontSize: 20}}>
                                <Col>
                                    <div>
                                        Posts
                                    </div>
                                    <div style={{color: 'white'}}>
                                        143
                                    </div>
                                </Col>
                                <div style={{width: '1px', height: '70px', backgroundColor: '#212121', padding:0}} />
                                <Col>
                                    <div>
                                        Followers
                                    </div>
                                    <div style={{color: 'white'}}>
                                        40.5 M
                                    </div>
                                </Col>
                                <div style={{width: '1px', height: '70px', backgroundColor: '#212121', padding:0}} />
                                <Col>
                                    <div>
                                        Following
                                    </div>
                                    <div style={{color: 'white'}}>
                                        28
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{marginLeft: 40, marginTop: 30}}>
                            <p>
                            Nobody is Listening Out Now!<br />
                            www.inzayn.com
                            </p>
                        </div>
                    </div>

                    <div style={{marginLeft: 40, marginTop: 50, width: '400px', height: '1px', backgroundColor: '#212121', padding:0}} />

                    <div onClick={() => setFeedOp(1)} style={{marginLeft: 30, marginTop: 20}}>
                        <Nav.Link style={{opacity:`${feedOp}`}} className="" href="/feed">
                            <Image style={{paddingRight:20}} src="/assets/feed/home.png"/>
                            <a style={{color: 'white'}}>Feed</a>
                        </Nav.Link>
                    </div>

                    <div style={{marginLeft: 30, marginTop: 20}}>
                        <Nav.Link onClick={() => setExploreOp(1)} style={{opacity:`${exploreOp}`}} className="" href="/explore">
                            <Image style={{paddingRight:20, width:45}} src="/assets/feed/explore.png"/>
                            <a style={{color: 'white'}}>Explore</a>
                        </Nav.Link>
                    </div>

                    <div style={{marginLeft: 40, marginTop: 20, width: '400px', height: '1px', backgroundColor: '#212121', padding:0}} />

                    <div style={{marginLeft: 30, marginTop: 20}}>
                        <Nav.Link onMouseEnter={() => setLogoutOp(1)} onMouseLeave={() => setLogoutOp(0.5)} style={{opacity:`${logoutOp}`}} className="" href="/">
                            <Image style={{paddingRight:20, width:45}} src="/assets/feed/logout.png"/>
                            <a style={{color: 'white'}}>Logout</a>
                        </Nav.Link>
                    </div>
                </div>
            </Col>

            <div style={{width: '1px', height: '1500px', backgroundColor: '#212121', padding:0}} />

            <Col style={{marginLeft: '', marginTop:0}}>
                <NaviBar />
                <div className="ms-5">
                <div style={{marginTop: 60, marginBottom: 40, fontSize: 60}}>
                    Zayn, Feed
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

export default Zayn
