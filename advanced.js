//1. The following function returns true if the parameter age is greater than 18.
//Otherwise, it asks for a confirmation and returns its result.

const checkAge = age => age > 18 || "Do you have your parents permission to access this page?";

// 2. Write a function pow(x,n) that returns x in power n. 
//Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
      let result = 1;
      for (let i = 0; i < n; i++) {
        result *= x;
      }
      return result;
    }
    console.log(pow(2, 3)); 

//3.Replace Function Expressions with arrow functions in the code

const ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
)
//4.Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

let calculator = {
    a: null,
    b: null,
  
    read() {
      this.a = +prompt('Enter the first value:', '');
      this.b = +prompt('Enter the second value:', '');
    },
  
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());

  // 5.Write a function min(a,b) which returns the least of two numbers a and b. 
//Use the arrow function along with the question mark operator ?
const min = (a, b) => a < b ? a : b;