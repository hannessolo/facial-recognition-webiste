import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Welcome extends Component {

  render() {
    return (
        <div className='content-container'>
          <div className='content'>
            <h1>Welcome</h1>
            <p>On this site you can learn all about how machine learning can be applied to the problem of facial recognition. You can either click on "Get Started" below to start reading, or select a page that interests you on the left.</p>
            <Link className={'welcome-button'} to={'/~hh4017/Introduction'}><span>Get Started</span></Link>
            <p>To find out more about the authors of this website, use the links below:</p>
            <ul>
              <li className='profile-link'><Link to={'/~hh4017/Yoram'}>Yoram Boccia</Link></li>
              <li className='profile-link'><Link to={'/~hh4017/Justin'}>Justin Chong</Link></li>
              <li className='profile-link'><Link to={'/~hh4017/Tom'}>Tom Claydon</Link></li>
              <li className='profile-link'><Link to={'/~hh4017/Hannes'}>Hannes Hertach</Link></li>
            </ul>
          </div>
        </div>
    )
  }

}
