import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import Content from './Content.jsx';
import Welcome from './Welcome.jsx';

export default class App extends Component {

  render() {
    return (
        <div>
          <nav>
            <NavLink exact={true} to='/'>Home</NavLink>
            <NavLink to='/introduction'>Introduction</NavLink>
          </nav>
          <div>
            <Route exact path='/' component={Welcome} />
            <Route path='/introduction' render={()=><Content page='introduction'/>} />
          </div>
        </div>
    )
  }

}