import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Welcome extends Component {

  render() {
    return (
        <div className='content-container'>
          <div className='content'>
            <h1>Welcome</h1>
            <p>On this site you can learn all about how machine learning can be applied to the problem of facial recognition. You can either click on "Get Started" below to read through our content in a linear way, or select a page that interests you on the left.</p>
            <Link className={'welcome-button'} to={'/Introduction'}><span>Get Started</span></Link>
          </div>
        </div>
    )
  }

}