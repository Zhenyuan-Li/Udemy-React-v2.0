// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function type, parameters

// Primitives:
let age: number;
age = 12;
let userName: string | [];
userName = 'Vince';
let isChill: boolean;
isChill = true;

// Complex:
let hobbies: string[] = ['Cooking', 'Music'];

let person: {
  name: string;
  age: number;
};
// Below will be an error: must be exact structure
// person = {
//   isEmployee: false,
// };
person = {
  name: 'Vincent',
  age: 27,
};

// To remove duplication, define a type
type Person = {
  name: string;
  age: number;
};

let people: {
  name: string;
  age: number;
}[];

// Union Type
let course: string | number = 'React - The Complete Guide';
course = 123;

// Function type
// If the return value is number, then we do not need to infer function type
const add = (a: number, b: number): string => {
  return `${a + b}`;
};
// This void is unnecessary
function myPrint(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// const thisIsError = insertAtBeginning(demoArray, 'hello')
// updateArray[0].split(''), since number do not have split() method
