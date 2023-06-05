const person = {
  name: 'Amandep Singh',
  age: 33,
  hobbies: ['Sports', 'Cooking', 'Traveling'],
};

console.log(person.name, person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); Error
}

const person2: {
  name: string;
  age: number;
} = {
  name: 'Mandeep Singh',
  age: 27,
};

console.log(person2.name, person2.age);
