import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModuleFoot = ({ className, children }) => (
  <div className={classNames('card-footer', className)}>
    {children}
  </div>
);

ModuleFoot.propTypes = {
  className: PropTypes.string,
};

ModuleFoot.defaultProps = {
  className: undefined,
};

export default ModuleFoot;
