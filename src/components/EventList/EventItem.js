import React from 'react';
import PropTypes from 'prop-types';

const EventItem = ({ date, type, app, desc, info, user, ip }) => (
  <tr>
    <td>{date}</td>
    <td>{type}</td>
    <td>{app}</td>
    <td>{desc}</td>
    <td>{info}</td>
    <td>{user}</td>
    <td>{ip}</td>
  </tr>
);

EventItem.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  app: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  desc: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
};

EventItem.defaultProps = {};

export default EventItem;
