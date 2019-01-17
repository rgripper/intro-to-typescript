import { User } from "../chapter - null-undefined/null";

type LoginFunction = (username: string, password: string) => User;

const login: LoginFunction = (username, password) => {
  return { id: 2019, fullName: "Gary Sun", avatarUrl: null };
};

function sendTwitterPost(body: string, username, imageUrl?: URL): void { }

//rest
function orderSubway(bread: string, meat: string, ...vegetables: string[]) { }
orderSubway("honey oats", "turkey", "tomato", "avocado")

