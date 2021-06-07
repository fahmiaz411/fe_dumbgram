import {Modal, Row, Col, Image, Form} from 'react-bootstrap'

function DetailFeed(props) {

    const {ref, show, handleClose } = props;

    return (
        <>
            <Modal
                style={{marginTop: 100}}
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Row>
                    <Col style={{backgroundColor: '', padding:0}}>
                        <Image style={{width:500}} src="/assets/feed/f7.png" />
                    </Col>
                    <Col style={{backgroundColor: '#1F1F1F', color: 'white'}}>
                        <div className="mt-5 ms-3">
                            <div>
                                <Image style={{width:30, marginRight:10}} src="/assets/users/zayn.png" />
                                <a>zayn</a>
                                <p style={{marginLeft:40, color: '#ABABAB'}}>To begin Again..</p>
                            </div>

                            <div style={{marginBottom:30, width: '260px', height: '1px', backgroundColor: 'grey', padding:0}} />

                            <div>
                                <Image style={{width:30, marginRight:10}} src="/assets/users/abdul_h.png" />
                                <a>abdul_h</a>
                                <p style={{marginLeft:40, color: '#ABABAB'}}>Nice Place</p>
                            </div>
                            <div>
                                <Image style={{width:30, marginRight:10}} src="/assets/users/egi_lol.png" />
                                <a>egi_lol</a>
                                <p style={{marginLeft:40, color: '#ABABAB'}}>Good Vibe</p>
                            </div>
                            <div align="right" style={{marginTop: 240}}>
                                <div className="mb-2">
                                    <Image style={{width: 17, marginRight:10}} src="/assets/feed/like.png" />
                                    <Image style={{width: 17, marginRight:10}} src="/assets/feed/comment.png" />
                                    <Image style={{width: 17}} src="/assets/feed/share.png" />
                                </div>
                                <div style={{color: '#ABABAB'}}>
                                    156.290 Like
                                </div>
                                <div className="mt-2">
                                    <Form>
                                        <Form.Group className="" style={{width: ''}} controlId="comment">
                                            <Form.Control className="border-0" style={{ height: 40, fontSize:'', background: '#474747', color: 'white' }} id="inputID" type="text" placeholder="Comment ..." />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default DetailFeed
