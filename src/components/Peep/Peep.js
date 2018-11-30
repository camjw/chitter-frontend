import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Peep = ({ peep }) => (
  <div className="container">
    <div className="row">
      {peep.body}
    </div>
    <div className="row">
        Peeped by
      {' '}
      {peep.user.handle}
      {' '}
      {moment(peep.created_at).fromNow()}
.
    </div>
    <hr />
    <br />
  </div>
);

Peep.propTypes = {
  peep: PropTypes.shape.isRequired,
};

export default Peep;
