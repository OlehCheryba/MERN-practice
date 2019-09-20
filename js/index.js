const element = React.createElement('div', {className: 'first'}, 
  React.createElement('h1', null, 'Hello World!'),
  React.createElement('p', null, 'Hello World!2')
);

ReactDOM.render(element, document.querySelector('#root'));