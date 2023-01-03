import products from '../data/products';

const generateRandomIndexes = (targetArray, num) => {
  const randIndexes = [];
  while (randIndexes.length < num) {
    const random = Math.floor(Math.random() * targetArray.length);
    if (randIndexes.indexOf(random) === -1) randIndexes.push(random);
  }
  return randIndexes;
};

const sortByValue = (products, value) => {
  switch (value) {
    case 'highToLow':
      return products.sort((a, b) => b.price - a.price);
    case 'lowToHigh':
      return products.sort((a, b) => a.price - b.price);
    case 'a-z':
      return products.sort((a, b) => a.name > b.name);
    default:
      return products;
  }
};

const sortByCategory = (products, category) => {
  const productsCopy = [...products];
  if (category === 'all') return productsCopy;
  return productsCopy.filter((prod) => prod.category === category);
};

const sortFully = (products, value, category) => {
  const sortedByCat = sortByCategory(products, category);
  return sortByValue(sortedByCat, value);
};

export { generateRandomIndexes, sortFully };
