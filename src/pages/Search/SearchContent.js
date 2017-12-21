import React, { Component } from 'react';

import { Search } from 'components/Search';
import { EventList } from 'components/EventList';
import { EventView } from 'components/EventView';

class SearchContent extends Component {
  render = () => {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Search />
          </div>
          <div className="col-xs-12 col-md-8">
            <EventList />
          </div>
        </div>
        <div className="col-xs-12">
          <EventView />
        </div>
      </div>
    );
  };
}

export default SearchContent;
