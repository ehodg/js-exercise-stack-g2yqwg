// Import stylesheets
import "./style.css";

class Stack {
  constructor(){
    this.data = []
    this.top = 0
  }
  push(element){
    this.data[this.top++] = element
    console.log(`"${element}"\n Was ADDED to the stack`)
  }
  pop(){
    let removed = this.data[--this.top]
    return `"${removed}"\n Was REMOVED from the stack`
  }
  length(){
    return `The length of the stack is ${this.top}`
  }
  peek(){
    return `The most recent add is "${this.data[this.top -1]}`
  }
  isEmpty(){
    return this.top === 0;
  }
  print(){
    console.log(`The data in the stack is: \n\n ${this.data}`)
  }
}

// TEST DATA
let stack = new Stack();
console.log(stack.isEmpty())
stack.push(15.1)
stack.push("Anh")
console.log("**********************************")
console.log(stack.length())
console.log(stack.pop())
stack.push("Gianna")
stack.print()
console.log("**********************************")
console.log(stack.peek())
stack.push("is cool")
stack.push("Joshua")
console.log(stack.isEmpty())
console.log("**********************************")
console.log(stack.length())
stack.push("is not")
stack.print()
console.log(stack.pop())
console.log("**********************************")

class Queue {
  constructor(size) {
    this.array = [];
    this.rear = 0;
    this.size = size;
  }
  enqueue(elem) {
    this.array[this.rear++] = elem
    console.log(`"${elem}"\n Was ADDED to the Queue`)
  }

  dequeue() {
    if(this.isEmpty()){
      return "Queue is Empty"
    }
    let removed = this.array.shift()
    return `"${removed}"\n was REMOVED from the Queue`
  }
  length(){
    return `The length of the Queue is ${this.rear}`
  }
  isEmpty(){
    return this.array.length === 0
  }
  getFirst(){
    let first = this.array[0]
    return `The FIRST element in the Queue is "${first}"`
  }
  getLast(){
    let last = this.array[this.rear - 1]
    return `The LAST element in the Queue is "${last}"`
  }
  print(){
    console.log(`The data in the Queue is: \n\n ${this.array}`)
  }
}
console.log('===================================')
let queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(["Naz", "Likes", "to", "dance"])
queue.enqueue(8)
console.log(queue.getFirst())
console.log('===================================')
console.log(queue.dequeue())
queue.enqueue("Huda")
queue.enqueue("rocks")
console.log(queue.getLast())
console.log(queue.getFirst())
console.log(queue.length())
console.log(queue.isEmpty())
console.log('===================================')
queue.enqueue("Anh")
queue.enqueue("doesn't")
console.log(queue.dequeue())
queue.print()
console.log('===================================')
// ADD the Stack Class Here