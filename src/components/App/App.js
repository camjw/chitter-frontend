import React from 'react';
import PropTypes from 'prop-types';
import ChitterFeed from '../ChitterFeed';
import UserSignUpContainer from '../../containers/UserSignUpContainer';
import UserSignInContainer from '../../containers/UserSignInContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { getPeeps } = props;
    this.updatePeepList = () => getPeeps();
    this.state = {
      displaySignUp: false,
      displaySignIn: true,
    };
    this.showSignUp = () => {
      this.setState({ displaySignUp: true, displaySignIn: false });
    };
    this.showSignIn = () => {
      this.setState({ displaySignUp: false, displaySignIn: true });
    };
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
            {this.props.currentUser && this.props.currentUserID
              && (
                <h4>
                  {' '}
                Welcome back to chitter
                  {' '}
                  {this.props.currentUser}
                  {' '}

                </h4>
              )
            }
            {!this.props.currentUserID
              && (
              <div className="row">
                {this.props.createdUser
                  && (
                  <h4>
                    {' '}
                    Created user
                    {' '}
                    {this.props.createdUser}
                    {' '}

                  </h4>
                  )
                }
                <div className="row">
                  <button onClick={this.showSignUp}>Sign Up to Chitter</button>
                  <button onClick={this.showSignIn}>Sign In to Chitter</button>
                </div>
                {this.state.displaySignUp
                  && (
                  <div className="row" id="UserSignUp">
                    <UserSignUpContainer />
                  </div>
                  )
                }
                {this.state.displaySignIn
                  && (
                  <div className="row" id="UserSignUp">
                    <UserSignInContainer />
                  </div>
                  )
                }
              </div>
              )
            }
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
                <button className="btn btn-primary" type="submit" onClick={() => this.updatePeepList()}>
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
