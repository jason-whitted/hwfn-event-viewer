module.exports = router =>
  router.post('/api/cities', (req, res) => {
    console.log(req.method, req.path);
    const { test } = req.body;
    const cities = [
      { name: 'New York City', population: 8175133 },
      { name: 'Los Angeles', population: 3792621 },
      { name: 'Chicago', population: 2695598 },
      { name: test, population: Math.random() },
    ];
    res.json(cities);
  });
