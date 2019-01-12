type Infantry = Person & Armed & Military

type Person = {
  name: string
  age: number
}

type Armed = {
  weaponType: string
}

type Military = {
  country: 'Australia' | 'Netherlands' | undefined
  rank: string
}

const monkeyWithGranade: Infantry = {
  name: 'Polly',
  age: 15,
  weaponType: 'Granade',
  country: undefined,
  rank: 'General'
}