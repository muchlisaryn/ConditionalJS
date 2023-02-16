const fruits = [
  {
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitName: "Apel",
    fruitType: "LOCAL",
    stock: 50,
  },
  {
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const minStock = fruits.filter((item) => item.stock > 50);
const dataStock = minStock.map((list) => list.fruitName);

console.log("Nama fruit yang stock nya lebih dari 50 :", dataStock);

const type = fruits.reduce((result, fruit) => {
  const fruitType = fruit.fruitType;
  const typeFruit = result[fruitType] || [];
  typeFruit.push(fruit.fruitName);
  result[fruitType] = typeFruit;
  return result;
}, []);

console.log("Buah berdasarkan Type", type);
