export default function find00OldPerson(collection) {
  return collection.find(item => item.age < 20).name;
}
