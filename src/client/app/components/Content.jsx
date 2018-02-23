import React, {Component} from 'react';

export default class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      content: "",
      notFound: false,
    };

    this.CONTENT_URL = 'http://localhost:3000/api/' + props.page.toLowerCase();

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
      this.CONTENT_URL = 'http://localhost:3000/api/' + this.props.page.toLowerCase();
      this._getContent();
    }
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
              <div>The page {this.props.page} does not exist.</div>
            </div>
          </div>
      )
    }
    return this.state.loading ?
        <div className='content-container'><p>Loading...</p></div> : (
        <div className='content-container'>
          <div className='content'>
            <h1>{this.props.page}</h1>
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          </div>
        </div>

    )
  }

}