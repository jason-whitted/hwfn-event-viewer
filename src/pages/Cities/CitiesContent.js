import React, { Component } from 'react';

import { apiProvider } from 'common';

class CitiesContent extends Component {
  state = { cities: undefined };

  componentWillMount() {
    const request = {
      url: '/api/cities',
      method: 'POST',
      data: { test: 'abc - easy as 1 2 3' },
    };

    const success = cities => {
      this.setState({ cities });
    };

    const failure = error => {
      console.error('CitiesContent', error);
    };

    return apiProvider(request).then(success).catch(failure);
  }

  render() {
    const { cities } = this.state;
    return (
      <div>
        {!cities && 'Loading...'}
        {cities && <pre>{JSON.stringify(cities, null, 2)}</pre>}
      </div>
    );
  }
}

export default CitiesContent;
