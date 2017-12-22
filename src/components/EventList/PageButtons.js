import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageButtons extends Component {
  first = event => {
    this.props.setPage(0);
  };

  prev = event => {
    const { page, setPage } = this.props;
    setPage(page - 1);
  };

  next = event => {
    const { page, setPage } = this.props;
    setPage(page + 1);
  };

  last = event => {
    this.props.setPage(Infinity);
  };

  render = () => {
    const { page, maxPage } = this.props;

    const atMin = !page;
    const atMax = page === maxPage - 1;

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-light" onClick={this.first} disabled={atMin}>
          <i className="fa fa-fw fa-step-backward" />
        </button>
        <button type="button" className="btn btn-light" onClick={this.prev} disabled={atMin}>
          <i className="fa fa-fw fa-chevron-left" />
        </button>
        <span className="p-2">
          Page {page + 1} / {maxPage}
        </span>
        <button type="button" className="btn btn-light" onClick={this.next} disabled={atMax}>
          <i className="fa fa-fw fa-chevron-right" />
        </button>
        <button type="button" className="btn btn-light" onClick={this.last} disabled={atMax}>
          <i className="fa fa-fw fa-step-forward" />
        </button>
      </div>
    );
  };
}

PageButtons.propTypes = {
  page: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

PageButtons.defaultProps = {};

export default PageButtons;
