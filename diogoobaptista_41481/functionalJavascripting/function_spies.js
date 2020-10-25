    function Spy(target, method) {
		var result = {count: 0};

		var spie = target[method];

		target[method] = function() {
			++result.count;
			return spie.apply(this, arguments);
		}
		return result;
    }

    module.exports = Spy