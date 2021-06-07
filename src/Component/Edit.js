import {NavLink} from 'react-router-dom'
import {Image} from 'react-bootstrap'

function Edit() {
    return (
        <>
            <NavLink style={{position: 'fixed', background: '', marginLeft:400}} className="" to="/edit-profile">
                <Image style={{width:30}} src="/assets/feed/edit.png" />
            </NavLink>
        </>
    )
}

export default Edit
