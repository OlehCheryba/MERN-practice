const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = continents.map(el => `Hello ${el}!`);
const message = helloContinents.join(' <br/> ');
let i = <span><br/><br/></span>;
const element = (
  <div>
    <h1>{i}{message}</h1>
  </div>
);

ReactDOM.render(element, document.querySelector('#root'));