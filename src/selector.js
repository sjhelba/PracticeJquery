var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // your code here
  // your code here
  // your code here

  return resultSet;
};

var matchFunctionMaker = function(selectorType) {
  
};

var $ = function(selector) {
  var elements;
  
  // your code here
  //
  // set selectorMatchFunc to a matching function
  // depending on the type of selector you have
  var selectorMatchFunc = matchFunctionMaker(type);
  
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
