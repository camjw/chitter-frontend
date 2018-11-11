import React from 'react'
import moment from 'moment'

export default class Peep extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          {this.props.peep.body}
        </div>
        <div className="row">
          Peeped by {this.props.peep.user.handle} {moment(this.props.peep.created_at).fromNow()}.
        </div>
        <hr/><br/>
      </div>
    )
  }
}
