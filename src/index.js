import React from 'react';
import ReactDOM from 'react-dom';


let title = React.createElement('h1', {}, 'An Awesome Person')
let paragraph = React.createElement('p', {}, "Who is learning React")
let myInterests = React.createElement('ul', {className: 'my-interests'}, [
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice cream')
])
let meInReact = React.createElement('div', {className: 'me'}, [title, paragraph, myInterests])

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
