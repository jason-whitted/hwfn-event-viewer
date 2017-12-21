import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModuleHead = ({ className, children }) => (
  <div className={classNames('card-header', className)}>
    {children}
  </div>
);

ModuleHead.propTypes = {
  className: PropTypes.string,
};

ModuleHead.defaultProps = {
  className: undefined,
};

export default ModuleHead;
