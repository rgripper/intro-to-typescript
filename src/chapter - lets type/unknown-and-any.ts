// Please be modest and type something as `unknown` if you don't care what it is :-)

function wrongDemo (data: unknown) {
  data.text = "Hey, I'm trying to override this!" // Compiler error
  const multi = data * 5;

  console.log(data);
  const json = JSON.stringify(data);
}

function goodDemo (data: unknown) {
  if (typeof data === 'string') {
    const duckling = data.indexOf('duckling');
  }
  
  if (typeof data === 'number') {
    const multi = data * 66;
  }
}


function evilDemo (data: any) {
  data.stockPrices.indexOf("Hey, I'm trying to call this method but I have no idea if it crashes runtime!") // This is evil
}