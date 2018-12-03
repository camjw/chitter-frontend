import React from 'react';
import PropTypes from 'prop-types';
import './PostPeep.css'

export default class PostPeep extends React.Component {
  constructor(props) {
    super(props);
    const { postPeep } = this.props;
    this.updatePeepText = (event) => {
      this.setState({ peepText: event.target.value });
    };
    console.log(this.props);
    this.postPeep = () => postPeep(this.props.currentUserID, this.props.currentSession, this.state.peepText);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Post a new peep</h3>
          <textarea id='peepBox' name="" rows="14" cols="10" wrap="soft" onChange={this.updatePeepText}> </textarea> <br />
          <button type="submit" onClick={this.postPeep}> Click to post </button>
        </div>
      </div>
    );
  }
}
