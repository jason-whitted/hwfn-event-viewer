const { APPLICATION, EVENT_TYPE } = require('../constants');

module.exports = router =>
  router.get('/api/meta', (req, res) => {
    return res.json({
      eventTypes: EVENT_TYPE,
      applications: APPLICATION,
    });
  });
