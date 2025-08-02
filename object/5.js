let myObject = {
  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true,
  hobbies: ["reading", "traveling", "coding"]
};
for (let key in myObject) {
  let type = typeof myObject[key];
  console.log(`key: ${key} | type:  ${type}`);
}
