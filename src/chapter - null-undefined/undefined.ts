type User_A = {
  id: number;
  fullName: string;
  avatarUrl: string | undefined; // `undefined` value is not available in JSON
};

const user_a_defined: User_A = {
  id: 5,
  fullName: "John Connor",
  avatarUrl: "http://example.com"
};

const user_a_undefined: User_A = {
  id: 5,
  fullName: "Sarah Connor",
  avatarUrl: undefined
};

// Compiler error: Property 'avatarUrl' is required in type 'User_A'
const user_a_missing: User_A = {
  id: 5,
  fullName: "Sarah Connor"
};

type User_B = {
  id: number;
  fullName: string;
  avatarUrl?: string;
};

const user_b_defined: User_B = {
  id: 5,
  fullName: "John Connor",
  avatarUrl: "http://example.com"
};

const user_b_undefined: User_B = {
  id: 5,
  fullName: "Sarah Connor",
  avatarUrl: undefined
};

const user_b_missing: User_B = {
  id: 5,
  fullName: "Sarah Connor"
};
