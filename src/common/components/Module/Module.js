import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModuleHead from './ModuleHead';
import ModuleBody from './ModuleBody';
import ModuleFoot from './ModuleFoot';

import './styles.css';

const Module = ({ className, children }) => (
  <div className={classNames('Module card', classNames)}>
    {children}
  </div>
);

Module.propTypes = {
  className: PropTypes.string,
};

Module.defaultProps = {
  className: undefined,
};

Module.Head = ModuleHead;
Module.Body = ModuleBody;
Module.Foot = ModuleFoot;

export default Module;
