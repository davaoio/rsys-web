import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

//router
import { BrowserRouter as Router, Route } from "react-router-dom"

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

//components
import components from './components'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './static/style/style.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div className="app-container">
          <Route exact path="/" component={components.HomeComponent}/>
          <Route path="/about/" component={components.AboutComponent}/>
        </div>
    </Router>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
