var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // traverse the DOM tree and collect matching elements in resultSet
  // use matchFunc to identify matching elements

  // YOUR CODE HERE

  return resultSet;
};


// detect and return the type of selector
// return one of these types: id, class, tag.class, tag

var selectorTypeMatcher = function(selector) {
  const things = ['.', '#']
  const types = ['class', 'id']
  let type;
  if (things.indexOf(selector[0]) < 0) {
    if (selector.indexOf('.') > -1) {
      type = 'tag.class';
    } else {
      type = 'tag';
    }
  } else {
    type = types[things.indexOf(selector[0])];
  }
  return type;
};


// NOTE ABOUT THE MATCH FUNCTION
// remember, the returned matchFunction takes an *element* as a
// parameter and returns true/false depending on if that element
// matches the selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // define matchFunction for id
    matchFunction = function (node) {
      return node.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    // define matchFunction for class
    matchFunction = function (node) {
      return node.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    // define matchFunction for tag.class
    matchFunction = function (node) {
      const [tag, className] = selector.split('.');
      return node.classList.contains(className) && node.tagName.toLowerCase() === tag;
    };
  } else if (selectorType === "tag") {
    // define matchFunction for tag
    matchFunction = function (node) {
      return node.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
