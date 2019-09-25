"use strict";

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = continents.map(function (el) {
  return "Hello ".concat(el, "!");
});
var message = helloContinents.join(' <br/> ');
var i = React.createElement("span", null, React.createElement("br", null), React.createElement("br", null));
var element = React.createElement("div", null, React.createElement("h1", null, i, message));
ReactDOM.render(element, document.querySelector('#root'));