import React from 'react';
import PropTypes from 'prop-types';
import Peep from '../Peep';

const ChitterFeed = ({ peeps }) => (
  <ul>
    <hr />
    {peeps.map(peep => (
      <div key={peep.id}>
        <Peep peep={peep} />
      </div>
    ))}
  </ul>
);

ChitterFeed.propTypes = {
  peeps: PropTypes.arrayOf(PropTypes.shape),
};

ChitterFeed.defaultProps = {
  peeps: [{
    id: -1, body: 'Loading', user: { handle: 'Loading' }, createdAt: 'Loading',
  }],
};

export default ChitterFeed;
