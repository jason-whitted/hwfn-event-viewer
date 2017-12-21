import React, { Component } from 'react';

import { apiProvider } from 'common';
import { Search } from 'components/Search';
import { EventList } from 'components/EventList';
import { EventView } from 'components/EventView';

class SearchContent extends Component {
  state = { events: undefined };

  search = criteria => {
    console.log('SearchContent', 'search', { criteria });

    const request = {
      url: '/api/search',
      method: 'POST',
      data: criteria,
    };

    const success = ({ events }) => {
      this.setState({ events });
    };

    const failure = error => {
      console.error('SearchContent', 'search', error);
    };

    return apiProvider(request).then(success).catch(failure);
  };

  render = () => {
    const { events } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <Search search={this.search} />
          </div>
          <div className="col-xs-12 col-md-8">
            <EventList events={events} />
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
