const DOMNodeCollection = require("./dom_node_collection");


window.$l = function (selector) {
  if (typeof selector === 'string') {
    let allNodes = Array.from(document.querySelectorAll(selector));
    let collection = new DOMNodeCollection(allNodes);
    return collection;
  }
  else if (selector instanceof HTMLElement) {
    let allNodes = [selector];
    let collection = new DOMNodeCollection(allNodes);
  }
  else if (typeof selector === 'function') {
    document.addEventListener("DOMContentLoaded", selector);
  }
};
