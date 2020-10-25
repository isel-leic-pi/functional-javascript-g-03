

function upperCaser(input) {
    return input.toUpperCase()
}

module.exports = upperCaser

/*************************************** */


function repeat(operation, num) {
    for(i = 1; i < num; i++)
        operation
  }

module.exports = repeat

/*************************************** */


function doubleAll(numbers) {
    return numbers.map(x => x*2)
  }

module.exports = doubleAll

/*************************************** */


function getShortMessages(messages) {
    let noObj = messages.map(obj => obj.message)
    let out = noObj.filter(msg => msg.length < 50)
    return out
}

module.exports = getShortMessages

/*************************************** */


function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((element) => goodUsers.some((goodElement) => goodElement === element))
    };
  }

  module.exports = checkUsersValid

/*************************************** */


  function countWords(inputWords) {
      return inputWords.reduce( (accumulator, currentValue) => {
            accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
            return accumulator
      },{});
  }

  module.exports = countWords

/*************************************** */

    function reduce(arr, fn, initial) {
        if (!arr.length) {
            return initial
        }  
        let currentItem = arr.shift()
        return reduce(arr, fn, initial)
      }
  
      module.exports = reduce
 /*
      function reduce(arr, fn, initial) {
        return (function reduceOne(index, value) {
          if (index > arr.length - 1) {
            return value       
          }                                                                 // end condition
          return reduceOne(index + 1, fn(value, arr[index], index, arr))    // calculate & pass values to next step
        })(0, initial)                                                      // IIFE. kick off recursion with initial values
      }
  
      module.exports = reduce
*/

/*************************************** */

    function duckCount() {
      var a = Array.from(arguments);
      const duckPropertyFilter = (obj) => {
        return Object.hasOwnProperty.call(obj,'quack')
      }
      var b = a.filter(duckPropertyFilter)
      return b.length
    }

    module.exports = duckCount

/*************************************** */

var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    // var concat1 = [namespace]
    // var concat2 = slice.call(arguments)
    // var out = concat1.concat(concat2)
    console.log.apply(null, [namespace].concat(slice.call(arguments)))
  } 
}

module.exports = logger

/*************************************** */

module.exports = function(namespace) {
    return console.log.bind(null, namespace)        
}    

/*************************************** */

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(arrToWrite, item, index, arr) {
      arrToWrite.push(fn.call(this,item, index, arr))
      return arrToWrite
    }, [])
}


/*************************************** */

function Spy(target, method) {
    target.count = 0
    var count = {count : 0}
    var tg = target[method]
    target[method] = function () {
      count.count++;
  	  return tg.apply(this, arguments);
    }
    return count
}

module.exports = Spy

/*************************************** */
/*
function repeat(operation, num) {  
  if (num <= 0) {
      return
  }
  operation()
  setTimeout(() =>  
  {
    return repeat(operation, --num)
  })
}*/

function repeat(operation, num) {  
  if (num <= 0) {
      return
  }
  operation()
  if (num % 5 === 0) {
    setTimeout(() =>  
    {
      return repeat(operation, --num)
    })
  } else {
    setTimeout(() =>  
    {
      return repeat(operation, --num)
    })
  }
}

module.exports = repeat

/*************************************** */

function repeat(operation, num) {                     
  if (num <= 0) {
    return
  }
  return function() {
    operation()   
    return repeat(operation, num--)     
  }        
}                                                     
                                                      
function trampoline(fn) {  
  while (fn && typeof fn === 'function') {
    fn = fn()                          
  }    
  return fn
}                                                     
                                                      
module.exports = function(operation, num) {           
  return trampoline(function() { 
    return repeat(operation, num)   
  } )                  
}

/*************************************** */

function loadUsers(userIds, load, done) {
  var users = []
  userIds.forEach(function(id, index) {
  	load(id, function(data) {
  		users[index] = data;
  		++count;
  		if(count === userIds.length) {
        return done(users);
      }
  	} )
  } )
  return users
}

module.exports = loadUsers

/*************************************** */

// missing recursion

/*************************************** */

// official answer, not done
function curryN(fn, n) {
  if(typeof n !== 'number') {
    n = fn.length;
  } 
  function genCurry(prev) {
    return function (arg) {
      var args = prev.concat(arg)
      if (args.length < n) {
        return genCurry(args)
      }
      return fn.apply(this, args)
    }
  }
  return genCurry([]);
}

module.exports = curryN

/*************************************** */

module.exports = Function.prototype.call.bind(Array.prototype.slice)