// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, haystack) {
  if (haystack === undefined) {
  	haystack = document.body;
  }

  var elements = [];
  if (haystack.classList !== undefined && haystack.classList.contains(className)) {
  	elements.push(haystack);
  }
  for(var i = 0; i < haystack.childNodes.length; i++) {
  	elements = elements.concat(getElementsByClassName(className, haystack.childNodes[i]));
  }

  return elements;
};
