type Infantry = Person & Armed & Military

type Person = {
  name: string
  age: number
}

type Armed = {
  weaponType: string
}

type Military = {
  country: 'Australia' | 'Belgium' | null
  rank: string
}

const monkeyWithGranade: Infantry = {
  name: 'Polly',
  age: 15,
  weaponType: 'Granade',
  country: null,
  rank: 'General'
}

export function isMercenary (military: Military) {
  return military.country === null;
}

export function canClaimPension (person: Person) {
  return person.age > 60;
}

console.log(
  isMercenary(monkeyWithGranade) // `true` - this monkey is definitely a mercenary!
);

console.log(
  canClaimPension(monkeyWithGranade) // `false` - this monkey can't claim pension, it's too young!
);
