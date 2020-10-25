    
	let maxLenght = 50
	module.exports = function (messages) {	
			return messages.map(object => object.message).filter(message => message.length < maxLenght);  
	  }

