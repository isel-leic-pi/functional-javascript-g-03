    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(submitedUser=>goodUsers.some(goodUser=>(goodUser == submitedUser)));		  
      };
    }

    module.exports = checkUsersValid