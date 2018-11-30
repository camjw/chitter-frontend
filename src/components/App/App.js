import React from 'react';
import PropTypes from 'prop-types';
import ChitterFeed from '../ChitterFeed';

export default class App extends React.Component {
  constructor(props) {
    super();
    const { getPeeps } = props;
    this.updatePeepList = () => getPeeps();
  }

  componentDidMount() {
    this.updatePeepList();
  }

  render() {
    const { receivedAt, isFetching, peeps } = this.props;
    return (
      <div>
        <h1>Chitter</h1>

        <button type="submit" onClick={() => this.updatePeepList()}>
          Refresh Feed
        </button>
        {receivedAt
          ? (
            <h2>
 Last updated
              {' '}
              {new Date(receivedAt).toLocaleTimeString()}
            </h2>
          )
          : null
        }

        {isFetching ? <h3>Loading Chitter Feed.</h3>
          : <ChitterFeed peeps={peeps} />
        }
      </div>
    );
  }
}

App.propTypes = {
  getPeeps: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  receivedAt: PropTypes.instanceOf(Date),
  peeps: PropTypes.arrayOf(PropTypes.shape()),
};

App.defaultProps = {
  receivedAt: null,
  peeps: [],
};
