import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModuleHead from './ModuleHead';
import ModuleBody from './ModuleBody';
import ModuleFoot from './ModuleFoot';

const Module = ({ className, children }) => (
  <div className={classNames('card', classNames)}>
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
