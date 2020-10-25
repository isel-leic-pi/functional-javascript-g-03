	
	function getDependencies(tree, result) {
 	var result = result || [];
 	var dependencias = tree.dependencies || {};
 	if(!tree.dependencies) return [];

 	Object.keys(dependencias).forEach(
	function(dependencia) {
 		var str = dependencia + "@" + dependencias[dependencia].version;

 		if(result.indexOf(str) < 0) {
 			result.push(str);
 		}

 		getDependencies(dependencias[dependencia], result);
 	})

 	return result.sort();//ordenar resultado final 
 	
}

module.exports = getDependencies

	