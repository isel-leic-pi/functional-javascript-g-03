    function reduce(arr, fn, initial) {
		
		var redu = function(idx, value) {
			if (idx > arr.length - 1) {
				return value       
			}                                                                
			return redu(idx + 1, fn(value, arr[idx], idx, arr))
		}
		return redu(0,initial);     
	}

    module.exports = reduce