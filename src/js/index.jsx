const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = continents.map(el => `Hello ${el}!`);
const message = helloContinents.join(' ');

const element = (
  <div>
    <h1>{message}</h1>
  </div>
);

ReactDOM.render(element, document.querySelector('#root'));