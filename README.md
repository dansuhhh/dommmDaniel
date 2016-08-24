# dommmDaniel
dommmDaniel uses vanilla JavaScript and the native DOM API to allow for manipulating the DOM, handling events, and making AJAX requests.

## Getting Started
1. Download the repo.
2. Place the dommmDaniel folder in your project directory.
3. Run `webpack dommmDaniel/main.js dommmDaniel/dommmDaniel.js` in Terminal.
4. In the header of your root html file, include the path to dommmDaniel.js in a `script` tag.
5. Start using dommmDaniel!

## Docs
**`$d(selector)`**
  * if `selector` is a string, uses [document.querySelectorAll(string)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to select matching HTML elements and creates a `DOMNodeCollection` out of them.
  * if `selector` is a HTML element, creates a `DOMNodeCollection` instance that contains the matching HTML elements.
  * if `selector` is a function, it will be added as an event to the  [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) event.

**`$d.ajax(options)`**
  * makes an AJAX request.
  * for any key/value pair in the optional `options` object argument, the corresponding key/value pair in the default options object is replaced. The final object is sent as data in the AJAX request.

#### DOMNodeCollection API
After selecting elements and creating a `DOMNodeCollection` with the core `$d` function, you can use the following `DOMNodeCollection.prototype` functions:

**`.html()`**
  * **`.html()`**
    * returns the first node in the `DOMNodeCollection`.
  * **`.html(string)`**
    * replaces the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of each node in the `DOMNodeCollection`.

**`.empty()`**
  * clears all HTML inside each node of the `DOMNodeCollection`.

**`.append(collection)`**
  * adds the [outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML) of each node in the `collection` argument to the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of each node in the `DOMNodeCollection`.

**`.attr()`**
  * **`.attr(attribute)`**
    * returns the value of the specified `attribute` of the first node in the `DOMNodeCollection`.
  * **`.attr(attribute, value)`**
    * for each node in the `DOMNodeCollection`, the specified `attribute` is set to the given `value`.

**`.addClass(className)`**
  * adds the given `class` to each node in the `DOMNodeCollection`.

**`.removeClass(className)`**
  * removes the given `class` from each node in the `DOMNodeCollection`.

**`.children()`**
  * returns a new instance of `DOMNodeCollection` containing the collective children of all nodes in the `DOMNodeCollection`.

**`.parent()`**
  * returns a new instance of `DOMNodeCollection` containing the collective parents of each node in the `DOMNodeCollection`.

**`.find(selector)`**
  * returns a new instance of `DOMNodeCollection` containing all descendants of the nodes that match the `selector`.

**`.remove()`**
  * removes all html of each node in the `DOMNodeCollection`.

**`.on(type, callback)`**
  * adds an event listener of the given `type` to each node in the `DOMNodeCollection`, which calls the `callback` when triggered.

**`.off(type, callback)`**
  * removes an event listener of the given `type` and `callback` from each node in the `DOMNodeCollection`.
