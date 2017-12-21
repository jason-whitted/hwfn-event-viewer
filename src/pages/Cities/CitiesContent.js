import React, { Component } from 'react';

class CitiesContent extends Component {
  state = { cities: undefined };

  componentWillMount() {
    fetch('/api/cities', {
      method: 'POST',
    })
      .then(r => r.json())
      .then(cities => {
        this.setState({ cities });
      });
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
