
class Stack {

  constructor() {
    this.stack = [];
    this.top = 0;
  }

  // Add an element to the stack.
  push(ele) {
    this.stack[this.top] = ele;
    this.top++;
  }

  // Delete an element from the stack.
  pop() {
    if (this.isEmpty === false) {
      this.top--;
      return this.data.pop();
    }
  }

  // Get the top element of the stack.
  peek() {
    return this.stack[this.top - 1];
  }

  // Return the length of the stack.
  length() {
    return this.top;
  }

  // Search for the element in the stack.
  search() {

  }

  // Check if the stack is empty.
  isEmpty() {
    return this.top === 0;
  }

  // Print the elements of the stack.
  print() {
    let top = this.top - 1;
    while(top >= 0) {
      console.log(this.stack[top]);
      top--;
    }
  }

  printReverse() {
    this._reverse(this.top - 1 );
  }

  _reverse(index) {
    if(index != 0) {
       this._reverse(index-1);
    }
    console.log(this.data[index]);
 }
}


let stack = new Stack;
console.log('Printing the stack : ');
stack.push('A');
stack.print();
console.log('The length of stack is : ', stack.length());
