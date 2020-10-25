    module.exports = function arrayMap(arr, fn) {
		var result = [];
		var reducer = function(prev, curr, idx, arr){
			result.push(fn(curr));
		}
		arr.reduce(reducer, null); 
		return result;
	}