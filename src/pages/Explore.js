import {Row, Col, Image, Card} from 'react-bootstrap'
import Brand from '../Component/Brand'
import Edit from '../Component/Edit'
import NaviBar from '../Component/NaviBar'
import Profile from '../Component/Profile'

function Explore() {
    return (
        <div>
        <Row>
            <Col sm={3} className="">
                <Brand />
                <Edit />
                <Profile />
            </Col>

            <div style={{width: '1px', height: '1500px', backgroundColor: '#212121', padding:0}} />

            <Col style={{marginLeft: '', marginTop:0}}>
                <NaviBar />
                <div className="ms-5 mb-5">
                <div style={{marginTop: 60, marginBottom: 40, fontSize: 60}}>
                    Explore
                </div>
                <Row style={{width: '98%',backgroundColor: ''}}>
                    <Col style={{backgroundColor: '', padding:0}}>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto4.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/feed/f1.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto6.png" />
                        </div>
                    </Col>
                    <Col style={{backgroundColor: '', padding:0, marginLeft: '1%'}}>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto7.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto1.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto2.png" />
                        </div>
                    </Col>
                    <Col style={{backgroundColor: '', padding:0, marginLeft: '1%'}}>
                        <div className="mb-3">
                            <Card.Img style={{ marginBottom: '2%'}} src="/assets/foto5.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img style={{ marginBottom: '2%'}} src="/assets/foto3.png" />
                        </div>
                        <div className="mb-3">
                            <Card.Img src="/assets/foto8.png" />
                        </div>
                    </Col>
                </Row>
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Explore
