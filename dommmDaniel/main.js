const DOMNodeCollection = require("./dom_node_collection");

window.$d = function (selector) {
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

$d.extend = (baseObject, ...otherObjects) => {
  otherObjects.forEach( object => {
    Object.keys(object).forEach( option => {
      baseObject[option] = object[option];
    });
  });
  return baseObject;
};

$d.ajax = (options) => {
  let defaults = {
    url: "/",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: {},
    success: () => {},
    error: () => {}
  };
  let completeOptions = $d.extend(defaults, options);

  let xhr = new XMLHttpRequest();
  xhr.open(completeOptions.method, completeOptions.url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      completeOptions.success(xhr.response);
    } else {
      completeOptions.error(xhr.response);
    }
  };
  xhr.send(JSON.stringify(completeOptions.data));
};
