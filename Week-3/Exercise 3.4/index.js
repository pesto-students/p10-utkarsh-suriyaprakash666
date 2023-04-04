function createStack() {
    const items = [];
  
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return console.log(items.pop());
      },
      print(){
        return console.log(items);
      }
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.print();
  stack.pop(); // => 5
  console.log(stack.items); // => undefined 

