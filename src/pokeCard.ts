//use enum to represent suit
enum Suit  { Club, Diamond, Heart, Spade }
//use enum to represent Numberr
enum CardNumber { Ace, Two, … , Queen, King }
//use tuple to define card type
type Card [ Suit, CardNumber ]
//a card
let c: Card = [ Suit.Clubs, CardNumber.Seven ]
