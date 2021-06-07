import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, login }) {

    const isLogin = false

    return (
        <Route
        render={(props) =>             
        isLogin ? <Component {...props} /> : <Redirect to="/" />
        } />
    )
}

export default PrivateRoute
