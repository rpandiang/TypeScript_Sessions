function getFirstElements(array: number|string[]): (number|string) {
    return array[0];
}

let nums = [1, 2, 3];
const firstNum = getFirstElements(nums);
console.log(firstNum); // Output: 1

let strs = ["a", "b", "c"];
const firstStr = getFirstElements(strs);
console.log(firstStr); // Output: "a"

// The above function works for both numbers and strings, but it can be improved using generics to maintain type safety.


// Mixed array example

type MixedType = number | string | boolean | null;

function getFirstMixedElement<T extends MixedType>(array: T[]): T {
    return array[0];
}

let mixedarray = [20, "hello", true, null];
let firstMixed = getFirstMixedElement(mixedarray);
console.log(firstMixed); // Output: 20

// Example with a different type
let anotherMixedArray = [false, 42, "world", null];
let firstAnotherMixed = getFirstMixedElement(anotherMixedArray);
console.log(firstAnotherMixed); // Output: false