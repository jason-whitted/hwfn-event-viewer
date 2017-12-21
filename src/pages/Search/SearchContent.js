import React, { Component } from 'react';

import { Search } from 'components/Search';
import { EventList } from 'components/EventList';
import { EventView } from 'components/EventView';

class SearchContent extends Component {
  render = () => {
    return (
      <div>
        <Search />
        <EventList />
        <EventView />
      </div>
    );
  };
}

export default SearchContent;
