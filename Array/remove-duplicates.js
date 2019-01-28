const array = [8, 5, 8, 4, 5];

// Using Set from ES6.
const uniqs1 = Array.from(new Set(array));

// Using Array.protoype.filter.
const uniqs2 = array.filter((item, index) => array.indexOf(item) === index);

// Using Array.prototype.reduce.
const uniqs3 = array.reduce((final, item) => {
  return final.includes(item) ? final : [...final, item];
});
