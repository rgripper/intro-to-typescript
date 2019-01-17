//anonymous: do as JS does
let hexColor = "#223344";

hexColor = 223344; //fail

//named: with annotation
const fileExtension: string = ".js";

//Structural Typing:
//More complex types like object or classes have more complex structures. They each get their own name even if they sometimes have the same structure overall.
//A static type checker uses either the names or the structure of the types in order to compare them against other types. Checking against the name is nominal typing and checking against the structure is structural typing.

type Laptop = {
  company: string;
  size: number;
};

let laptop: Laptop;

let laptop2 = {
  company: "apple",
  size: 13
};

laptop = laptop2;
