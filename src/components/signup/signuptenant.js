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
          <div className="container home-content">
            <div className="text-center">
              <h3 className="home-heading">SIGNUP TENATN</h3>
              <p className="home-subheading">Deserunt id non incididunt Lorem excepteur aliqua elit veniam ex <br/> aliquip excepteur minim tempor.</p>
            </div>
            <div className="row home-search-container">
              <div className="col-3">
                <select className="r-select">
                  <option value="">Country</option>
                </select>
              </div>
              <div className="col-3">
                <select className="r-select">
                  <option value="">State/Region</option>
                </select>
              </div>
              <div className="col-3">
                <select className="r-select">
                  <option value="">City</option>
                </select>
              </div>
              <div className="col-3">
                <button className="home-search-btn">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}