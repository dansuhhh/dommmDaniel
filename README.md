# dommmDaniel
dommmDaniel uses vanilla JavaScript and the native DOM API to recreate the functionality of the [jQuery library](https://jquery.com), which is known for its ability to operate across browsers in manipulating the DOM, handling events, and making AJAX requests.

## Getting Started
1. Download the repo.
2. Place the dommmDaniel folder in your project directory.
3. Run `npm run webpack dommmDaniel/main.js dommmDaniel/dommmDaniel.js` in Terminal.
4. In the header of your root html file, include the path to dommmDaniel.js in a script tag.
5. Start using dommmDaniel!

## Docs
`$d(selector)`

`$d.ajax()`

#### DOMNodeCollection API
After selecting elements and creating a `DOMNodeCollection` with the core `$d` function, you can use the following `DOMNodeCollection.prototype` functions:

`.html()`
  * `.html()`
  * `.html(string)`

`.empty`

`.append(collection)`

`.attr()`
  * `.attr(attribute)`
  * `.attr(attribute, value)`

`.addClass(className)`

`.removeClass(className)`

`.children()`

`.parent()`

`.find(selector)`

`.remove()`

`.on()`

`.off()`
