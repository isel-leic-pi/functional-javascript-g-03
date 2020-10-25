/************* EX 1**************/
/* module.exports = upperCaser

function upperCaser(input){
    return input.toUpperCase()

}
console.log(upperCaser("random words")) */


/************* EX 2  **************/
/*function repeat(operation, num) {
    for (let i = 1; i===num; i++){
        repeat(operation,num)
    }
  }
  module.exports = repeat

  
/************* EX 3 **************/
/*
function doubleAll(numbers) {
    var result = []
    result = numbers.map(x => x * 2 )
    return result
  }

  module.exports = doubleAll */

/************* EX 4 **************/
/*
function getShortMessages(messages) {
     let withoutObj = messages.map(obj => obj.message)
     let result = withoutObj.filter(msg => msg.length < 50)
     return result
  }

  module.exports = getShortMessages
*/

/************* EX 5 **************/
/*
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(submitedUser=>goodUsers.some(goodUser=>(goodUser == submitedUser)));
  };
}
module.exports = checkUsersValid */

/************* EX 6 **************/
/*
function countWords(inputWords) {
  var values = {}
  var reducer = function(valuesCount, words) {
    if (!valuesCount[words]) {
      valuesCount[words] = 1;
    } else {
      valuesCount[words] += 1;
    }
    return valuesCount;
  }
  return inputWords.reduce(reducer, values) 
  }
module.exports = countWords */

/************* EX 7 **************/
/*
function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
}

module.exports = reduce */

/************* EX 8 **************/
/*
function duckCount() {
  function isDuck(arg) {
    return Object.prototype.hasOwnProperty.call(arg, "quack")
}

function countDuck(args, index, number) {
    if (index >= args.length) {
        return number
    }
    else {
        return countDuck(args, index + 1, number + (isDuck(args[index]) ? 1 : 0))
    }
}

  return countDuck(arguments, 0, 0)
}

module.exports = duckCount */

/************* EX 9 **************/
/*
var slice = Array.prototype.slice

function logger(namespace) {
  return function(){
    var args = slice.call(arguments); //variável podia ser evitada
  	console.log.apply(null, [namespace].concat(args));
  }
}

module.exports = logger */

/************* EX 10 **************/  
/* 
module.exports = function(namespace) {
  return console.log.bind(null,namespace)  PQ CONSOLE em vez de null ?
}
*/

/************* EX 11 **************/ 
/*
module.exports = function arrayMap(arr, fn) {
  var result = [];
  arr.reduce(function(prev, curr, idx, arr) {
  	result.push(fn(curr)); // push acrescenta curr de fn a result
  }, null);
  return result;
}*/

/************* EX 12 **************/ 
/*
function Spy(target, method) {
  var spy = {
    count : 0
  }
  var original = target[method];

  target[method] = function() {
    spy.count++
    return original.apply(this,arguments)
  }
  return spy
}

module.exports = Spy */

/************* EX 13 **************/ 
/*
function repeat(operation, num) {
  if (num <= 0) return
  operation()
  if (num % 20 === 0) {
	  setInterval(function() {
	    repeat(operation, --num)
	  })
	} else {
	  repeat(operation, --num)
	}
}

module.exports = repeat */

/************* EX 14 **************/ 
/*
function repeat(operation, num) {
  if (num <= 0) return

  return function(){
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  while(fn === 'function'){
    fn = fn()
  }
  return fn
}

module.exports = function(operation, num) {
  return trampoline(function(){
    return repeat(operation, num)
  })
} */

/************* EX 15 **************/ 
/*
function loadUsers(userIds, load, done) {
  var users = []
  var count = 0
  userIds.array.forEach(element => {
    
  });
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers */

/************* EX 16 **************/ 
/*
function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
}

module.exports = getDependencies */

/************* EX 17 **************/ 
/*
function curryN(fn, n) {
  // SOLUTION GOES HERE
}

module.exports = curryN */

/************* EX 18 **************/ 
module.exports = Function.call.bind(Array.prototype.slice);