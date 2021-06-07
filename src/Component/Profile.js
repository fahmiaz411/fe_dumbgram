import {Image, Row, Col, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import NaviBar from './NaviBar'

function Profile() {

    const [feedOp, setFeedOp] = useState(0.5)
    const [exploreOp, setExploreOp] = useState(0.5)
    
    const [logoutOp, setLogoutOp] = useState(0.5)
    return (
        <div style={{position: 'fixed', width:440, marginTop:50}}>
            <div>                
                <div align="center">
                    <Image style={{width: '45%'}} src="/assets/feed/lisa.png" />
                </div>
                <div align="center" style={{marginTop: '10px', fontSize: 30, fontWeight: 500}}>
                    Lisa
                </div>
                <div align="center" style={{color: '#ABABAB'}}>
                    @lalalisa_m
                </div>
                <div style={{marginTop: '50px'}}>
                    <Row align="center" style={{color:'#ABABAB', fontSize: 20}}>
                        <Col>
                            <div>
                                Posts
                            </div>
                            <div style={{color: 'white'}}>
                                200
                            </div>
                        </Col>
                        <div style={{width: '1px', height: '70px', backgroundColor: '#212121', padding:0}} />
                        <Col>
                            <div>
                                Followers
                            </div>
                            <div style={{color: 'white'}}>
                                51.2 M
                            </div>
                        </Col>
                        <div style={{width: '1px', height: '70px', backgroundColor: '#212121', padding:0}} />
                        <Col>
                            <div>
                                Following
                            </div>
                            <div style={{color: 'white'}}>
                                1
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{marginLeft: 40, marginTop: 30}}>
                    Rapper in Black Pink, Brand Ambasador Penshoppe
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
    )
}

export default Profile
