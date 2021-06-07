import {Row, Col, Image, Button, Form} from 'react-bootstrap'
import Brand from '../Component/Brand'
import Edit from '../Component/Edit'
import NaviBar from '../Component/NaviBar'
import Profile from '../Component/Profile'

function CreatePost() {
    return (
        <div>
        <Row>
            <Col sm={3} className="">
                <Brand />
                <Edit />
                <Profile />
            </Col>

            <div style={{width: '1px', height: '850px', backgroundColor: '#212121', padding:0}} />

            <Col sm={8} style={{backgroundColor:''}}>
                <NaviBar />
                <div className="ms-4" style={{marginTop:100, background: '', width:'103%'}}>                    
                <div style={{marginTop: 60, marginBottom: 40, fontSize: 60}}>
                    Create Post
                </div>
                <div className="mt-5">
                    <Button className="button border-0" style={{width: 300, fontSize: 20, fontWeight: 500}}>
                            Upload Photos or Videos
                    </Button>
                </div>
                <div className="mt-4">
                <Form>
                    <Form.Group className="mb-3" controlId="caption">
                        <Form.Control
                        as="textarea"
                        placeholder="Caption"
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
                            Upload
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

export default CreatePost
