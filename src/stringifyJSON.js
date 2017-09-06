// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
  	return "null";
  } else if(Array.isArray(obj)) {
  	var elementStrings = [];
  	for (var i = 0; i < obj.length; i++) {
  		if (obj[i] !== undefined && typeof obj[i] !== 'function') {
  			elementStrings.push((stringifyJSON(obj[i])));
  		}
  	}
  	return "[" + elementStrings.join(",") + "]";
  } else if(typeof obj === 'object') {
  	var pairStrings = [];
  	for (var key in obj) {
  		if (obj[key] !== undefined && typeof obj[key] !== 'function') {
  			pairStrings.push(("\"" + key + "\":" + stringifyJSON(obj[key])));
  		}
  	}
  	return "{" + pairStrings.join(",") + "}";
  } else if (typeof obj === 'string') {
  	return "\"" + obj + "\"";
  } else {
  	return obj.toString();
  }
};
