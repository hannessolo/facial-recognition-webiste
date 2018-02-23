import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import Content from './Content.jsx';
import Welcome from './Welcome.jsx';
import Parameters from './Parameters.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sidebar: [],
      menu: false,
    };

    this.SIDEBAR_URL = Parameters.BASE_URL + '/api/pages-available';
    this._toggleMenu = this._toggleMenu.bind(this);

  }

  componentDidMount() {
    this._loadSidebarContent();
  }

  _loadSidebarContent() {
    fetch(this.SIDEBAR_URL).then((res) => {
      return res.json();
    }).then((res) => {
      this.setState({
        loading: false,
        sidebar: res.sidebar,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  _toggleMenu() {
    this.setState(prev => ({
      menu: !prev.menu,
    }));
  }

  render() {
    return this.state.loading ? <p>Loading...</p> : (
        <div>
          <span className={"top-line"}></span>
          <div className="top-bar">
            <span className="hamburger" onClick={this._toggleMenu}><i
                className="material-icons md-48">menu</i></span>
          </div>
          <div className={'nav-bar ' +
          (this.state.menu ? 'show' : 'hide translate-menu')}>
            <NavLink className='nav-item' exact={true} to='/'>Home</NavLink>
            {
              this.state.sidebar.map((route, index) => (
                  <NavLink className='nav-item' key={index}
                           to={route}>{route}</NavLink>
              ))
            }
          </div>
          <div className={'body ' +
          (this.state.menu ? 'translate-content' : '')}>
            <Route exact path='/' component={Welcome}/>
            <Route path='/:page'
                   render={({match}) => <Content page={match.params.page}/>}/>
          </div>
        </div>
    );
  }

}