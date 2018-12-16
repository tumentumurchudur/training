let list = [
  { name : 'orange', units : 2, price : 10, type : 'FRT'},
  { name : 'lemon', units : 1, price : 15, type : 'FRT'},
  { name : 'fish', units : 0.5, price : 30, type : 'MET'}
];

const isFruit = (line) => line.type === 'FRT'
const addPrice = (total, line) => total + line.units * line.price

const fruitPrice = list.filter(isFruit).reduce(addPrice, 0)
const totalPrice = list.reduce(addPrice, 0)

console.log('FruitPrice', fruitPrice)
console.log('TotalPrice', totalPrice)