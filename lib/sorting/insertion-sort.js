/**
 * ### Insertion-sort algorithm.
 * @module sorting/insertion-sort
 */

/**
 * ##### Complexity:
 * | Case     | Time   | Space |
 * |:---------|:-------|:------|
 * | Best:    | O(n)   |       |
 * | Average: | O(n^2) |       |
 * | Worst:   | O(n^2) | O(n)  |
 *
 * @function
 * @param {Object[]} arr - The input array.
 * @returns {Object[]} Sorted array (ascending).
 */
module.exports = (arr = []) => {

  /** Traverse the array from the second element to the end. */
  for(let j = 1; j < arr.length; j++) {

    /** Hold the current array element's value in a temporary variable. */
    let key = arr[j];

    /** Set a while loop iterator to the previous element of the array. */
    let i = j - 1;

    /** Iterate backwards by pushing a part of the sorted sub-array forwards
     *  until finding an element with a value greater than key, and insert
     *  the key value at the next element in the array.
     */
    while(i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;

  }

  /** Return the sorted array. */
  return arr;

}
