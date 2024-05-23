import ArrayBufferConverter from './js/ArrayBufferConverter';
import './css/style.css';

const res = new ArrayBufferConverter();
res.load();
console.log(res);
console.log(res.buffer);
console.log(res.toString());
