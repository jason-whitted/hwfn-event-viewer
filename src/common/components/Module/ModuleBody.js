import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModuleBody = ({ className, children }) => (
  <div className={classNames('card-body', className)}>
    {children}
  </div>
);

ModuleBody.propTypes = {
  className: PropTypes.string,
};

ModuleBody.defaultProps = {
  className: undefined,
};

export default ModuleBody;
