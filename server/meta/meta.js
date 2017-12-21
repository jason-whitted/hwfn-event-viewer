const eventTypes = {
  1: 'Debug',
  2: 'Usage',
  3: 'Warning',
  4: 'Error',
  5: 'Notification',
};

const applications {
  1: 'Portal (Production)',
  2: 'ORCC (Production)',
  3: 'Lending Web Service (Production)',
  4: 'Penley Discovery (Qualifile) Web Service (Production)',
  5: 'AD Sync (Production)',
};

module.exports = router =>
  router.get('/api/meta', (req, res) => {
    return res.json({
      eventTypes,
      applications,
    });
  });
