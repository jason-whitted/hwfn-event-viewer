import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { Module } from 'common';

import connectConfig from './connect';
import EventItem from './EventItem';

const maxPages = pageSize => arr => Math.ceil((arr || []).length / pageSize);

class EventList extends Component {
  state = {
    filter: '',
    page: 0,
    pageSize: 10,
  };

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

  filterChange = event => {
    const filter = event.target.value;
    this.setState({ filter });
  };

  getFilteredEvents = () => {
    const events = this.merge();
    if (!events) {
      return events;
    }

    const lower = s => `${s || ''}`.toLowerCase();

    const f = lower(this.state.filter);
    if (!f) {
      return events;
    }

    const filter = ({ moment, type, app, desc, info, user, ip }) => {
      return (
        lower(moment.format('YYYY-MM-DD LTS')).includes(f)
        || lower(type).includes(f)
        || lower(app).includes(f)
        || lower(desc).includes(f)
        || lower(info).includes(f)
        || lower(user).includes(f)
        || lower(ip).includes(f)
      );
    };

    return events.filter(filter);
  };

  getSortedEvents = () => {
    const events = this.getFilteredEvents();
    if (!events) {
      return events;
    }

    // TODO: Add some sorting logic

    return events;
  }

  getPaginatedEvents = () => {
    const events = this.getSortedEvents();
    if (!events) {
      return events;
    }

    const { page, pageSize } = this.state;
    const pages = maxPages(pageSize)(events);

    const start = page * pageSize;
    return events.slice(start, start + pageSize);
  };

  render = () => {
    const { meta } = this.props;
    const { filter } = this.state;
    const events = this.getPaginatedEvents();

    return (
      <Module>
        <Module.Head>
          <div className="d-flex justify-content-between">
            <div>Event List</div>
            <div>
              <input type="text" placeholder="Filter" onChange={this.filterChange} value={filter} />
            </div>
            <div>Per page goes here</div>
          </div>
        </Module.Head>
        <table className="table table-sm table-bordered table-striped mb-0">
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
        <Module.Foot className="text-center">
          Paging goes here
        </Module.Foot>
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
