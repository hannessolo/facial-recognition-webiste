import React, {Component} from 'react';

export default class Reference extends Component {

  render() {

    console.log(this.props.refer)

    let index = this.props.indexNo;
    let refer = this.props.refer;

    if (this.props.refer.url == null) {
      return (
        <div className='reference'>
          [{index + 1}] {refer.author + " (" +
          refer.year + "), " +
          refer.title +
          (refer.page != null ? (", " + refer.page) : "")
          }
        </div>
      )
    }

    return (
      <a href={this.props.refer.url} className='reference'>
        [{index + 1}] {refer.author + " (" +
        refer.year + "), " +
        refer.title +
        (refer.page != null ? (", " + refer.page) : "")
        }
      </a>
    )

  }

}
