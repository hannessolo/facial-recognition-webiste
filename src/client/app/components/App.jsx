import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import Content from './Content.jsx';
import Welcome from './Welcome.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sidebar: []
    };

    this.SIDEBAR_URL = 'http://localhost:3000/api/pages-available';

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
        sidebar: res.sidebar
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return this.state.loading ? <p>Loading...</p> : (
        <div >
          <div className='nav-bar'>
            <NavLink className='nav-item' exact={true} to='/'>Home</NavLink>
            {
              this.state.sidebar.map((route, index) => (
                <NavLink className='nav-item' key={index} to={route} >{route}</NavLink>
              ))
            }
          </div>
          <div>
            <Route exact path='/' component={Welcome} />
            <Route path='/:page' render={({match})=><Content page={match.params.page}/>} />
          </div>
        </div>
    )
  }

}