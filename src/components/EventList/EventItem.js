import React from 'react';
import PropTypes from 'prop-types';

const EventItem = ({ moment, type, app, desc, info, user, ip }) => (
  <tr>
    <td>
      <span className="d-inline-block text-nowrap">
        {moment.format('YYYY-MM-DD')}
      </span>
      <span className="d-inline-block text-nowrap">
        {moment.format('LTS')}
      </span>
    </td>
    <td>{type}</td>
    <td>{app}</td>
    <td>{desc}</td>
    <td>{info}</td>
    <td>{user}</td>
    <td>{ip}</td>
  </tr>
);

EventItem.propTypes = {
  moment: PropTypes.object.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  app: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  desc: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
};

EventItem.defaultProps = {};

export default EventItem;
