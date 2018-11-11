import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    this.updatePeepList();
  }

  updatePeepList = () => this.props.getPeeps();
  clearPeepList = () => this.props.clearPeeps();

  render() {
    console.log('PROPS')
    console.log(this.props)
    return (
      <div>
        <h1>Chitter</h1>

        <h2>Last updated at: {this.props.isFetching}</h2>

        <button onClick={() => this.updatePeepList()}>
          Refresh Feed
        </button>

        <button onClick={() => this.clearPeepList()}>
          Clear Feed
        </button>

        {/* <ul>
          {this.props.peeps.map((peep, index) => (
            <li key={index}>
              <p>
                {peep.body} peeped by {peep.user.handle}
              </p>
            </li>
          ))}
        </ul> */}

      </div>
    );
  }
}
