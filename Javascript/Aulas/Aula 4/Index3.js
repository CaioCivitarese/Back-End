const price = 340;
const percentage = 25;

const discont = (price * percentage) / 100;
const finelPrice = price - discont;

console.log("Preço do produto:", price);
console.log("Valor do produto:", discont);
console.log("Preço final", finelPrice);