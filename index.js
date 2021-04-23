// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array = [9, 30, 4, 18, 6, 1, 5];

//Declared a function that handles the mergeSort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //Find the middle of the function by dividing in half
  let mid = Math.floor(arr.length / 2);

  //Declare left that recursively calls the function with the argument of the left side of the array
  let left = mergeSort(arr.slice(0, mid));

  //Declare right that calls the function recursively with the argument that has the right side of the array
  let right = mergeSort(arr.slice(mid));

  //Call the merge function with the left and right as the argument
  return merge(left, right);
}

// Helper function that handles the merging of the arrays
function merge(left, right) {
  let sorted = [];
  //Conditional that while there is elements in the left and right array
  while (left.length && right.length) {
    //If left is less than right then push that value into the sorted array
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } //Else, push the right element into the sorted array
    else {
      sorted.push(right.shift());
    }
  }
  // Return the sorted array with the left and right
  return sorted.concat(left.slice()).concat(right.slice());
}

console.log(mergeSort(array));
