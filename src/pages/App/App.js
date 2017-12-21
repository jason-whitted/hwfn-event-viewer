import React from 'react';

import routes from 'pages/routes.js';

const App = () => (
  <div className="container">
    <header>
      <h1>Ent Event Viewer</h1>
    </header>
    {routes}
  </div>
);

export default App;
