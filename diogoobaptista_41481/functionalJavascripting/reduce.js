    function countWords(inputWords) {
		var values = {}
		var reducer = function(valuesCount, words) {
		  if (!valuesCount[words]) {
			valuesCount[words] = 1;
		  } else {
			valuesCount[words] = valuesCount[words] + 1;
		  }
		  return valuesCount;
		}
		return inputWords.reduce(reducer, values) 
    }

    module.exports = countWords








