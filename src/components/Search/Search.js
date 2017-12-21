import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Module } from 'common';

class Search extends Component {
  click = event => {
    const criteria = {};
    this.props.search(criteria);
  };

  render = () => {
    return (
      <Module>
        <Module.Head>
          Search
        </Module.Head>
        <Module.Body>
          Coming soon...
        </Module.Body>
        <Module.Foot>
          <button type="button" className="btn btn-primary" onClick={this.click}>
            Search
          </button>
        </Module.Foot>
      </Module>
    );
  };
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

Search.defaultProps = {};

export default Search;
