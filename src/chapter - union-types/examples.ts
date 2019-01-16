type Result = Success | Failure;

type Success = {
  isSuccess: true;
  value: number;
}

type Failure = {
  isSuccess: false;
  errorMessage: string;
}

function convertStringToNumber (input: string): Result  {
  if (input === 'one') return { isSuccess: true, value: 0 }
  else if(input === 'two') return { isSuccess: true, value: 1 }
  else return { isSuccess: false, errorMessage: 'Must be a string!' }
}

const one = convertStringToNumber('one');
const two = convertStringToNumber('rubbish');

//if (one.isSuccess && two.isSuccess) {
  const sum = one.value + two.value; // Compiler error: it asks you to put a check for `isSuccess === true` here
  console.log(sum);
//}

