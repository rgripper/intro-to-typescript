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

function isMercenary (military: Military) {
  return military.country === null;
}

function canClaimPension (person: Person) {
  return person.age > 60;
}