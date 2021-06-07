import {NavLink} from 'react-router-dom'
import {Image} from 'react-bootstrap'

function Brand() {
    return (
        <div className="mt-4" style={{marginBottom:100}}>
            <NavLink style={{position: 'fixed', backgroundColor: ''}} className="ms-3 me-4" to="/feed">
                <Image style={{width:200}} src="/assets/DumbGram.png" />
            </NavLink>
        </div>
    )
}

export default Brand
