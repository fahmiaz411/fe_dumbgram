import {Row, Col, Image, Button, Form, FloatingLabel} from 'react-bootstrap'
import Brand from '../Component/Brand'
import NaviBar from '../Component/NaviBar'
import Profile from '../Component/Profile'

function EditProfile() {
    return (
        <div>
        <Row>
            <Col sm={3} className="">
                <Brand />
                <div className="mt-5"> 
                    <Profile />
                </div>
            </Col>

            <div style={{width: '1px', height: '1200px', backgroundColor: '#212121', padding:0}} />

            <Col sm={8} style={{backgroundColor:''}}>
                <NaviBar />
                <div className="ms-4" style={{marginTop: 100, background: '', width:'103%'}}>
                <div style={{marginTop: 60, marginBottom: 40, fontSize: 60}}>
                    Edit Profile
                </div>
                <div className="mt-5">
                    <Button className="button border-0" style={{width: 200, fontSize: 20, fontWeight: 500}}>
                            Upload Photos
                    </Button>
                </div>
                <div className="mt-3">
                <Form>
                    <Form.Group className="mb-3" style={{width: ''}} controlId="name">
                        <Form.Control style={{ height: 70, fontSize:30, background: '#474747', color: 'white' }} type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{width: ''}} controlId="username">
                        <Form.Control style={{ height: 70, fontSize:30, background: '#474747', color: 'white' }} type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Control
                        as="textarea"
                        placeholder="Bio"
                        style={{
                            fontSize:30,
                            height: 200,
                            background: '#474747',
                            color: 'white'
                        }}
                        />
                    </Form.Group>
                
                    <div align="right" style={{marginTop: 100}}>
                        <Button 
                            className="button border-0"
                            style={{
                                width: 200,
                                height: 50,
                                fontSize:20,
                                fontWeight: 500
                            }}
                            type="submit">
                            Save
                        </Button>
                    </div>

                </Form>
                </div>
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default EditProfile
