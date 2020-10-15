/*

function upperCaser(input) {
    return input.toUpperCase()
}

module.exports = upperCaser

/*************************************** */
/*

function repeat(operation, num) {
    for(i = 1; i < num; i++)
        operation
  }

module.exports = repeat

/*************************************** */
/*

function doubleAll(numbers) {
    return numbers.map(x => x*2)
  }

module.exports = doubleAll

/*************************************** */
/*

function getShortMessages(messages) {
    let noObj = messages.map(obj => obj.message)
    let out = noObj.filter(msg => msg.length < 50)
    return out
}

module.exports = getShortMessages

/*************************************** */
/*

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((element) => goodUsers.some((goodElement) => goodElement === element))
    };
  }

  module.exports = checkUsersValid
  */