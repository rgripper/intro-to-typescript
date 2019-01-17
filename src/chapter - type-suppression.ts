const fruits = [{ name: 'banana' }, { name: 'mango' }];
const banana = fruits.find(x => x.name === 'banana');

// Non-null/undefined assertion
console.log(banana!.name);

type Rating = { value: 1 | 2 | 3 | 4 | 5; }

const userRating = { value: 5 };

userRating.userId = 775;

// type casting
(userRating as any).userId = 775

