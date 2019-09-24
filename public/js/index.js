const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = continents.map(el => `Hello ${el}!`);
const message = helloContinents.join(' ');
const element = React.createElement("div", null, React.createElement("h1", null, message));
ReactDOM.render(element, document.querySelector('#root'));