import React from 'react';
import ChitterFeed from '../ChitterFeed'

export default class App extends React.Component {
  componentDidMount() {
    this.updatePeepList();
  }

  updatePeepList = () => this.props.getPeeps();
  clearPeepList = () => this.props.clearPeeps();

  render() {
    return (
      <div>
        <h1>Chitter</h1>

        <button onClick={() => this.updatePeepList()}>
          Refresh Feed
        </button>
        {this.props.receivedAt ?
          <h2>Last updated {new Date(this.props.receivedAt).toLocaleTimeString()}</h2>
          : null
        }

        {this.props.isFetching ? <h3>Loading Chitter Feed.</h3>:
        <ChitterFeed peeps={this.props.peeps} />
        }
      </div>
    );
  }
}
