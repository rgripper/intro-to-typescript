type Result<T> = Success<T> | Failure;

type Success<T> = {
  isSuccess: true;
  value: T;
}

interface Failure {
  isSuccess: false;
  errorMessage: string;
}

function convertStringToNumber (input: string): Result<number>  {
  if (input === 'one') return { isSuccess: true, value: 0 }
  else if(input === 'two') return { isSuccess: true, value: 1 }
  else return { isSuccess: false, errorMessage: 'Must be a string!' }
}

function convertStringToDate (input: string): Result<Date>  {
  if (input === 'today') return { isSuccess: true, value: new Date() }
  else return { isSuccess: false, errorMessage: 'Must be a string!' }
}


const one = convertStringToNumber('one');
const two = convertStringToNumber('rubbish');

const today = convertStringToDate('today');
if (today.isSuccess) {
  console.log(today.value);
}

if (one.isSuccess && two.isSuccess) {
  const sum = one.value + two.value; // Compiler error: it asks you to put a check for `isSuccess === true` here
  console.log(sum);
}

