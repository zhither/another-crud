import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import Create from './components/Create.component';
import Edit from './components/Edit.component';
import Index from './components/index.component';
import Home from './components/Home'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="conainer-fluid" >
          <nav className="navbar navbar-expand-sm bg-danger navbar-light">
          <a className="navbar-brand" href="google.com">
          <img src="http://placehold.it/150x50?text=Logo" alt="" />
          </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/home' component= { Home } />
              <Route path='/' component= { Home } />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
