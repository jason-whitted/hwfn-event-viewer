import React from 'react';
import PropTypes from 'prop-types';

import { Module } from 'common';

const EventList = ({ events }) => (
  <Module>
    <Module.Head>
      EventList
    </Module.Head>
    <Module.Body>
      <pre>
        {JSON.stringify(events, null, 2)}
      </pre>
    </Module.Body>
  </Module>
);

EventList.propTypes = {
  events: PropTypes.array,
};

EventList.defaultProps = {
  events: undefined,
};

export default EventList;
