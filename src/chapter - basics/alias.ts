//use "type" keyword to define a type alias
type N = Number;
const age: N = 28;

//hiding complex types behind an alias
enum Subject {
  MachineLearning,
  AI,
  KnowledgeBase,
  Algorithms
}

type Student = {
  id: number;
  name: string;
  gender: string;
  course: string;
  subjects: Subject[];
};

// const student: Student = {
//   id: 12345,
//   name: "Gary Sun",
//   gender: "male",
//   course: "IT",
//   subjects: [Subject.AI, Subject.Algorithms]
// };

//these types can be exported to be consumed in other file
export { N };

//widely used to define a struture like tuple
export type RgbColor = [N, N, N];
let red: RgbColor = [255, 0, 0];
