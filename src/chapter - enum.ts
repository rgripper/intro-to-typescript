//used to define a type consisting of ordered members
enum PetType {Cat, Dog};
//each member of an enum has a name and value(default number starting from 0)
console.log(PetType.Cat); //0
//often we don't care about the value, but we can change that
enum PetTypeValue {Cat = 1, Dog = 3}
console.log(PetTypeValue.Cat); //"cat"
//name, value pair
PetTypeValue[1] === "Cat" //true
PetTypeValue["Cat"] === 1 //true
//get number of members:
Object.keys(PetType).length/2


//Code Challenge: Type of a poke card

//use enum to represent suit
enum Suit  { Club, Diamond, Heart, Spade }
//use enum to represent Numberr
enum CardNumber { Ace, Two, Three , Queen, King }
//use tuple to define card type
type Card [ Suit, CardNumber ]
//a card
let c: Card = [ Suit.Club, CardNumber.Three ]
