export default function collectCarNumberCount(collection) {
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].charAt(1) === 'A') {
      count++;
    }
  }
  return count;
}
