const faker = require('faker');

const event = () => ({
  id: faker.random.number(),
  date: faker.date.past().toISOString(),
  type: faker.random.number(),
  appId: faker.random.number(),
  desc: faker.lorem.text(),
  info: faker.hacker.phrase(),
  user: faker.internet.userName(),
  ip: faker.internet.ip(),
  version: '1.0.0.0',
  eventId: faker.random.number(),
});

module.exports = router =>
  router.post('/api/search', (req, res) => {
    console.log(req.method, req.path);
    const { test } = req.body;

    const events = new Array(42).fill(0)
      .map(event);

    res.json({ events });
  });
