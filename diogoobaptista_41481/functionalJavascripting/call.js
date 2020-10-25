    function duckCount() {
		let result = 0;
			for(i=0;i<arguments.length;++i){
				if(Object.prototype.hasOwnProperty.call(arguments[i],'quack')){
					++result;
				}
			}
		return result;
    }

    module.exports = duckCount