import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavSubMenu from './NavSubMenu.jsx';

export default class CollapsableMenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);

  }

  mouseEnter() {
    this.setState({ collapsed: false });
  }

  mouseLeave() {
    this.setState({ collapsed: true });
  }

  render() {
    return (
      <div className='nav-item-container' onMouseEnter={this.mouseEnter}
      onMouseLeave={this.mouseLeave}>
        <NavLink className={'nav-item ' + (this.state.collapsed ? '' : 'submenu-highlight')}
                 to={'/~hh4017/' + this.props.route.name}>
                 {this.props.route.name}
        </NavLink>
        {this.props.route.children.length == 0 ? "" :
          <NavSubMenu
          hide={this.state.collapsed}
          routes={this.props.route.children} />
        }
      </div>
    );
  }

}
