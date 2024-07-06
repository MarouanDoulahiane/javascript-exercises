const container = document.querySelector('#container');
const P = document.createElement('p');

P.innerText = "Hey I'm red";
P.style.color = 'red';

container.appendChild(P);

const H3 = document.createElement('h3');

H3.innerText = "I'm a blue h3!";
H3.style.color = 'blue';

container.appendChild(H3);

const div = document.createElement('dev');

const h1Child = document.createElement('h1');
h1Child.innerText = "I'm in a dev";

const pChild = document.createElement('p');
pChild.innerText = "ME TOO!";

div.appendChild(h1Child);
div.appendChild(pChild);

container.appendChild(div);