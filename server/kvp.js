const faker = require('faker');

const kvp = obj => {
  const keys = Object.keys(obj);
  const values = keys.map(k => obj[k]);
  const randomValue = () => values[faker.random.number() % keys.length];

  return {
    keys,
    values,
    randomValue,
  };
};

module.exports = kvp;
