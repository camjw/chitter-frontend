import React from 'react';
import PropTypes from 'prop-types';
import ChitterFeed from '../ChitterFeed';
import UserSignUpContainer from '../../containers/UserSignUpContainer';

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
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <h1>Chitter</h1>
            </div>
            <div className="row">
              <UserSignUpContainer />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm">
                {receivedAt
                  ? (
                    <h2>
                  Last updated
                      {' '}
                      {new Date(receivedAt).toLocaleTimeString()}
                    </h2>
                  )
                  : <h2>Loading Chitter Feed</h2>
              }
              </div>
              <div className="col-sm">
                <button className='btn btn-primary' type="submit" onClick={() => this.updatePeepList()}>
                  Refresh Feed
                </button>
              </div>
            </div>
            <div className="row">
              {isFetching ? null
                : <ChitterFeed peeps={peeps} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getPeeps: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  receivedAt: PropTypes.number,
  peeps: PropTypes.arrayOf(PropTypes.shape()),
};

App.defaultProps = {
  receivedAt: null,
  peeps: [],
};
