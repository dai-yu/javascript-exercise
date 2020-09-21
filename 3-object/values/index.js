export default function countTypesNumber(source) {
  return Object.values(source).reduce((result, item) => new Number(result) + new Number(item));
}
