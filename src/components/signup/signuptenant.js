import React from 'react'
import Header from '../base/header'
import changeBodyBackground from '../../helpers/index'
const bgImage = require('../../static/img/background.jpg')

export default class SignupTenant extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  componentDidMount () {
    changeBodyBackground(bgImage)
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="container pt-5">
            <div className="text-center">
              <h3>Create a Tenant Account</h3>
            </div>
            <form>
              <div className="row mt-5">
                <div className="col-8 offset-2">
                  <div className="row">
                    <div className="col-lg-6">
                      <input className="r-input" type="text" placeholder="First Name"/>
                    </div>
                    <div className="col-lg-6">
                      <input className="r-input" type="text" placeholder="Last Name"/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <input className="r-input" type="text" placeholder="Email Address"/>
                    </div>
                    <div className="col-lg-6">
                      <input className="r-input" type="text" placeholder="Country"/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <input className="r-input" type="password" placeholder="Password"/>
                    </div>
                    <div className="col-lg-6">
                      <input className="r-input" type="password" placeholder="Confirm password"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}