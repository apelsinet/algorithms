const insertionSort = require('./lib/sorting/insertion-sort');

console.time('Insertion-sort finished in');
console.log(insertionSort([6,5,3,7,8,6,4,5,6,8,8,8,4,2,4,2,6,7]));
console.timeEnd('Insertion-sort finished in');
