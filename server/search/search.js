const faker = require('faker');

const { APPLICATION, EVENT_TYPE } = require('../constants');
const kvp = require('../kvp');

const applications = kvp(APPLICATION);
const eventTypes = kvp(EVENT_TYPE);

const event = () => ({
  id: faker.random.number(),
  date: faker.date.past().toISOString(),
  typeId: eventTypes.randomValue(),
  appId: applications.randomValue(),
  desc: faker.lorem.text(),
  info: faker.hacker.phrase(),
  user: faker.internet.userName(),
  ip: faker.internet.ip(),
  version: '1.0.0.0',
});

module.exports = router =>
  router.post('/api/search', (req, res) => {
    console.log(req.method, req.path);
    const { test } = req.body;

    const events = new Array(42).fill(0)
      .map(event);

    res.json({ events });
  });
