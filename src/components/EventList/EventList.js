import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Module } from 'common';

import connectConfig from './connect';

class EventList extends Component {
  componentWillMount = () => {
    this.props.getMeta();
  };

  render = () => {
    const { events, meta } = this.props;

    return (
      <Module>
        <Module.Head>
          EventList
        </Module.Head>
        <Module.Body>
          <pre>
            {JSON.stringify(meta, null, 2)}
          </pre>
          <pre>
            {JSON.stringify(events, null, 2)}
          </pre>
        </Module.Body>
      </Module>
    );
  };
}

EventList.propTypes = {
  events: PropTypes.array,
  // connect
  getMeta: PropTypes.func,
  meta: PropTypes.object,
};

EventList.defaultProps = {
  events: undefined,
};

export default connect(...connectConfig)(
  EventList
);
