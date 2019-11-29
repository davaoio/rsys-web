import React from 'react'
import Header from '../base/header'
import changeBodyBackground from '../../helpers/index'
const bgImage = require('../../static/img/background.jpg')

export default class HomeComponent extends React.Component {
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
              <h3 className="home-heading">Voluptate sint dolore tempor labore ex amet</h3>
              <p className="home-subheading">Deserunt id non incididunt Lorem excepteur aliqua elit veniam ex <br/> aliquip excepteur minim tempor.</p>
            </div>
            <div className="row home-search-container">
              <div className="col-3">
                <select className="r-input">
                  <option value="">Country</option>
                </select>
              </div>
              <div className="col-3">
                <select className="r-input">
                  <option value="">State/Region</option>
                </select>
              </div>
              <div className="col-3">
                <select className="r-input">
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