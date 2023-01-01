const generateRandomIndexes = (targetArray, num) => {
  const randIndexes = [];
  while (randIndexes.length < num) {
    const random = Math.floor(Math.random() * targetArray.length);
    if (randIndexes.indexOf(random) === -1) randIndexes.push(random);
  }
  return randIndexes;
};

export { generateRandomIndexes };
