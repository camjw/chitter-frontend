import React from 'react'

export default class ChitterFeed extends React.Component {
  render() {
    console.log(this.props.peeps)
    return(
      <ul>
        {this.props.peeps.map((peep, index) => (
          <div key={index}>
              {peep.body} peeped by {peep.user.handle}
          </div>
        ))}
      </ul>
    )
  }
}
