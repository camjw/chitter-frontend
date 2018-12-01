import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import LikeButton from '../LikeButton'

const Peep = ({ peep }) => (
  <div className="container">
    <div className="row">
      <h4>{peep.body}</h4>
    </div>
    <div className="row">
      <div className="col-sm-4">
          Peeped by
        {' '}
        {peep.user.handle}
        {' '}
        {moment(peep.created_at).fromNow()}
  .
      </div>
      <div className="col-sm-4">
        {peep.likes.length}
        {' '}
        {peep.likes.length === 1 ? 'like' : 'likes'}
      </div>
      <div className="col-sm-4">
        <LikeButton />
      </div>
    </div>
    <hr />
    <br />
  </div>
);

Peep.propTypes = {
  peep: PropTypes.shape().isRequired,
};

export default Peep;
