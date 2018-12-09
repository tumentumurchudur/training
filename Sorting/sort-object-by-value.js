const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60
};
const sortable = [];

for (const vehicle in maxSpeed) {
  sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort((a, b) => a[1] - b[1])
