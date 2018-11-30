import React from 'react';
import moment from 'moment';

const Peep = props => {
  return (
    <div className="container">
      <div className="row">
        {props.peep.body}
      </div>
      <div className="row">
        Peeped by
        {' '}
        {props.peep.user.handle}
        {' '}
        {moment(props.peep.created_at).fromNow()}
.
      </div>
      <hr />
      <br />
    </div>
  );
};

export default Peep;
