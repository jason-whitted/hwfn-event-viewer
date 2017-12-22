import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { Module } from 'common';

import connectConfig from './connect';
import EventItem from './EventItem';

class EventList extends Component {
  merge = () => {
    const { events, meta } = this.props;

    if (!events) {
      return events;
    }

    let refresh = !meta;

    const swap = (obj = {}) => Object.keys(obj).reduce((o, k) => ({ ...o, [obj[k]]: k }), {});
    const getter = prop => {
      const kvp = swap((meta || {})[prop]);
      return id => {
        const res = kvp[id];
        refresh |= !res;
        return res || id;
      };
    };
    const getType = getter('eventTypes');
    const getApp = getter('applications');

    const map = event => ({
      ...event,
      type: getType(event.typeId),
      app: getApp(event.appId),
      moment: moment(event.date),
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
        <table className="table table-sm table-bordered table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Application</th>
              <th>Description</th>
              <th>Additional Info</th>
              <th>Username</th>
              <th>IP</th>
            </tr>
          </thead>
          {events && (
            <tbody>
              {events.map(evt => <EventItem key={evt.id} {...evt} />)}
            </tbody>
          )}
        </table>
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
