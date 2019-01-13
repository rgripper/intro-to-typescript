//use "type" keyword to define a type alias
type N = Number;
const age: N = 28;

//these types can be exported to be consumed in other file
export { N };

//widely used to define a struture like tuple
export type RgbColor = [N, N, N];
let red: RgbColor = [255, 0, 0];
