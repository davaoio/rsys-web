import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return(
      <div id="header-nav">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-2 logo-header">
              Logo
            </div>
            <div className="col">
              <div className="header-menus">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup/tenant"><button className="header-sign-up-btn">SIGN UP</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)