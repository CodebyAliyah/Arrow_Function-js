
const user = {
  userName : "Ali Yahya",
  Price : 999,
  
  websiteName : function () {
    console.log(`${this.userName} , welcome to this website and pay ${this.Price}.`)
    
  }
}

// *This* is used for current context.
user.websiteName()
user.userName = "Awaise"
user.websiteName()



function Code() {
  user : "Ali Yajya"
  console.log(this.user)
}
Code()

const Chai = function() {
  let user = "Ali Yajya"
  console.log(user)
}
Chai()

// *This* is not work on Function.

// ********* Arrow Function ******** //

const global = () => {
  let myName = "Rajpoot"
  console.log(myName)
}

global ()




// const addTwo = (num1 , num2) => {
//   return num1 + num2 ;
// }

// console.log(addTwo(5,8));

// 2nd way arrow function.

const addTwo = (num1 , num2) =>  num1 + num2 ;

console.log(addTwo(5,8));


