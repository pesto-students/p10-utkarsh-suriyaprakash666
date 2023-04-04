function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // Count is 0


/* This is because when the createIncrement function is called, 
 the message variable is assigned to the string Count is 0 before any increments are made to the count variable.

 When log() is called after the increments, it still logs the original value of message, which is Count is 0.

 To log the updated value of count, we need to make sure that message is updated every time increment is called. 
 We can do this by moving the assignment of message into the log function. */