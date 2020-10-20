

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