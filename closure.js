function createCounter() {
  let count = 0;

   function displayCounter() {
    count++;
    console.log("Count:", count);
  };
  return displayCounter;
}

const counter = createCounter();
counter(); 
counter(); 
counter(); 
