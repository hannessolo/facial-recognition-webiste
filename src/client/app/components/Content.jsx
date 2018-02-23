import React, {Component} from 'react';
import Parameters from './Parameters.js';

export default class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      content: "",
      notFound: false,
    };

    this.CONTENT_URL = Parameters.BASE_URL + '/api/' + props.page.toLowerCase();

  }

  componentDidMount() {
    this._getContent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.setState({
        loading: true,
        notFound: false
      });
      this.CONTENT_URL = Parameters.BASE_URL + '/api/' + this.props.page.toLowerCase();
      this._getContent();
    }
    this._reloadMathScript();
  }

  _reloadMathScript() {
    window.updateMath();
  }

  _getContent() {
    fetch(this.CONTENT_URL).then((res) => {
      if (res.status == 404) {
        this.setState({
          notFound: true
        });
      }
      return res.text();
    }).then((res) => {
      this.setState({
        loading: false,
        content: res
      });
    }).catch((err) => {
      this.setState({
        notFound: true
      });
    });
  }

  render() {

    if (this.state.notFound) {
      return (
          <div className='content-container'>
            <div className='content'>
              <h1>404</h1>
              <div>{this.props.page} does not exist.</div>
            </div>
          </div>
      )
    }
    return this.state.loading ?
        <div className='content-container'><p>Loading...</p></div> : (
        <div className='content-container'>
          <div id='content' className='content'>
            <h1>{this.props.page}</h1>
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          </div>
        </div>

    )
  }

}