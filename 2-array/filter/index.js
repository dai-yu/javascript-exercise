function chooseMultiplesOfThree(collection) {
  return collection.filter(item => item % 3 == 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter(function(item, index, self) {
    return self.indexOf(item) == index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
