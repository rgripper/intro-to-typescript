import { N } from "./alias";
import { RgbColor } from "./alias";

//in JS, an array can have any array inside
let anyArray: any[] = [1, "2"];
//adding a type constraint helps us keep content consistent
const nums: N[] = [1, 2, 3];

//empty array without type => never[]
const never = [];
never.push(1); //fail

//array of two types
const twoTypes: (string | number)[] = [];
twoTypes.push("string");
twoTypes.push(1);

//tuple
const student: [string, number] = ["Gary", 787878];
student[2] = 5;
const rgbColor: RgbColor = [0, 1, 1];
