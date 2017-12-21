import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Module } from 'common';

import connectConfig from './connect';

class EventList extends Component {
  merge = () => {
    const { events, meta } = this.props;

    if (!events) {
      return events;
    }

    let refresh = !meta;

    const swap = (obj = {}) => Object.keys(obj).reduce((o, k) => ({ ...o, [obj[k]]: k }), {});
    const applications = swap((meta || {}).applications);
    const eventTypes = swap((meta || {}).eventTypes);

    const getter = kvp => id => {
      const res = kvp[id];
      refresh |= !res;
      return res || id;
    };
    const getType = getter(eventTypes);
    const getApp = getter(applications);

    const map = event => ({
      ...event,
      type: getType(event.typeId),
      app: getApp(event.appId),
    });

    const result = events.map(map);

    if (refresh) {
      this.props.getMeta({ force: true });
    }

    return result;
  };

  render = () => {
    const { meta } = this.props;
    const events = this.merge();

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
