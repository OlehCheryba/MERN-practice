"use strict";

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = continents.map(function (el) {
  return "Hello ".concat(el, "!");
});
var message = helloContinents.join(' ');
var element = React.createElement("div", null, React.createElement("h1", null, message));
ReactDOM.render(element, document.querySelector('#root'));