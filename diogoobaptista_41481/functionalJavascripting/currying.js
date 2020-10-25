    function curryN(fn, n) {
		  if(typeof n !== 'number') n = fn.length;

		  function generate(prev) {
			return function(arg) {
				var args = prev.concat(arg);
				if(args.length < n) return generate(args);
				return fn.apply(this, args);
			}
		}
		return generate([]);
    }

    module.exports = curryN