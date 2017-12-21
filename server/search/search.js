module.exports = router =>
  router.post('/api/cities', (req, res) => {
    console.log(req.method, req.path);
    const cities = [
      { name: 'New York City', population: 8175133 },
      { name: 'Los Angeles', population: 3792621 },
      { name: 'Chicago', population: 2695598 },
    ];
    res.json(cities);
  });
