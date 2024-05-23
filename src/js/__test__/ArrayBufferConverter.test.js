import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Testing the loading and conversion of Array Buffer Converter to a string', () => {
  const received = new ArrayBufferConverter();
  received.load(getBuffer());
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(received.toString()).toBe(expected);
});
