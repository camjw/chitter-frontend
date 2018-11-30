import React from 'react';
import Peep from '../Peep';

export default class ChitterFeed extends React.Component {
  render() {
    return (
      <ul>
        <hr />
        {this.props.peeps.map((peep, index) => (
          <div key={index}>
            <Peep peep={peep} />
          </div>
        ))}
      </ul>
    );
  }
}
