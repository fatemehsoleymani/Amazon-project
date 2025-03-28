import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suits : format currency');

console.log('Converts cents to dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('unpassed!');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('unpassed!');
}

console.log('rounds up to the nearest cents');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('unpassed!');
}

if (formatCurrency(2000.0) === '20.00') {
  console.log('passed');
} else {
  console.log('unpassed!');
}

