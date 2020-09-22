export default function addSerialNumber(source) {
  const serialNumber = { serialNumber: '12345' };
  Object.assign(source, serialNumber);
  const a = { status: 'processed' };
  Object.assign(source.properties, a);
  return source;
}
