import React from 'react';

import routes from 'pages/routes.js';

import './styles.css';

const App = () => (
  <div className="App">
    <header>
      <h1>Ent Event Viewer</h1>
    </header>
    {routes}
  </div>
);

export default App;
