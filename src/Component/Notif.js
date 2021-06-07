import {Button, Modal, Form, Image} from 'react-bootstrap'

function Notif(props) {

    const {show, handleClose } = props;

    return (
      <>
        <Modal style={{color: 'white', marginLeft:'67%', marginTop: 60, width:250}} show={show} onHide={handleClose}>
        <div style={{background: '#303030'}}>
          <div className="mt-4 ms-4 mb-4">
            <div>
                <Image style={{width:30, marginRight:10}} src="/assets/users/abdul_h.png" />
                <a>abdul_h</a>
                <p style={{marginLeft:40}}>Komentar : <a style={{color: '#ABABAB'}}>Nice Place</a></p>
            </div>
            <div>
                <Image style={{width:30, marginRight:10}} src="/assets/users/egi_lol.png" />
                <a>egi_lol</a>
                <p style={{marginLeft:40}}>Komentar : <a style={{color: '#ABABAB'}}>Good Vibe</a></p>
            </div>
          </div>
        </div>
        </Modal>
      </>
    )
}

export default Notif
