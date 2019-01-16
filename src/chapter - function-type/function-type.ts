import { User } from "../chapter - null-undefined/null";

let login: (username: string, password: string) => User;

login = (username, password) => {
  return { id: 2019, fullName: "Gary Sun", avatarUrl: null };
};

function sendTwitterPost(body: string, username, imageUrl?: URL): void {}

//rest

const orderSubway(bread: string, meat: string, ...vegetables:string[]){}
orderSubway("honey oats","turkey","tomato","avocado")

