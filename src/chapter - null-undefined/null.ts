type User = {
  id: number;
  fullName: string;
  avatarUrl: string | null; // `null` is JSON-friendly
};

const user_defined: User = {
  id: 5,
  fullName: "John Connor",
  avatarUrl: "http://example.com"
};

// Compiler error: Type 'undefined' is not assignable to type 'string | null'
const user_undefined: User = {
  id: 5,
  fullName: "Sarah Connor",
  avatarUrl: undefined
};

const user_null: User = {
  id: 5,
  fullName: "Sarah Connor",
  avatarUrl: null
};

// Compiler error: Property 'avatarUrl' is required in type 'User_A'
const user_missing: User = {
  id: 5,
  fullName: "Gary Busey"
};
