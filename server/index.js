const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

require('./search')(router);

app.use(router);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
