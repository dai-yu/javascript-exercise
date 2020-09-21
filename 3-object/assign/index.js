export default function addSerialNumber(source) {
  source.serialNumber = '12345';
  source.properties.status = 'processed';
  return source;
}
