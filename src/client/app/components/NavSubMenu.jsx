import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavSubMenu extends Component {

  render() {
    return (
      this.props.routes.map((route, index) => (
        <NavLink className={'nav-item sub-item' + (this.props.hide ? ' nav-sub-hide' : '')}
          key={index} to={route}>{route}</NavLink>
      ))
    );
  }

}
