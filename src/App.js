import './css/Global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Feed from './pages/Feed'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import NaviBar from './Component/NaviBar'
import LandingPage from './pages/LandingPage'
import Message from './pages/Message';
import Explore from './pages/Explore';
import CreatePost from './pages/CreatePost';
import EditProfile from './pages/EditProfile';
import Zayn from './pages/Zayn';
import ZaynMsg from './pages/ZaynMsg';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <div className="background">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LandingPage/>
          </Route>
          <Route exact path="/register">
            <LandingPage />
          </Route>

          <PrivateRoute exact path="/feed/zayn" component={Zayn} />
          
          <PrivateRoute path="/feed" component={Feed} />

          <PrivateRoute path="/explore" component={Explore} />

          <PrivateRoute path="/message/zayn" component={ZaynMsg} />

          <PrivateRoute path="/message" component={Message} />

          <PrivateRoute path="/create-post" component={CreatePost} />

          <PrivateRoute path="/edit-profile" component={EditProfile} />


        </Switch>
      </Router>
    </div>
  )
}

export default App
