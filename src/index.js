// import _ from 'lodash';
// import $ from 'jquery';
// import 'bootstrap';

import './index.scss';


/*

<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>

*/
function jumbotron() {
  const jumbotron = document.createElement('div');
  jumbotron.classList.add('jumbotron', 'jumbotron-fluid');

  const container = document.createElement('div');
  container.classList.add('container');

  const heading = document.createElement('h1');
  heading.classList.add('display-4');
  heading.innerHTML = 'Hello, world!';

  const paragraph1 = document.createElement('p');
  paragraph1.classList.add('lead');
  paragraph1.innerHTML = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';

  const hr = document.createElement('hr');
  hr.classList.add('my-4');

  const paragraph2 = document.createElement('p');
  paragraph2.classList.add('lead');
  paragraph2.innerHTML = 'It uses utility classes for typography and spacing to space content out within the larger container.';

  const href = document.createElement('a');
  href.classList.add('btn', 'btn-primary', 'btn-lg');
  href.href = '#';
  href.role = 'button';
  href.innerHTML = 'Learn more';

  container.appendChild(heading);
  container.appendChild(paragraph1);
  container.appendChild(hr);
  container.appendChild(paragraph2);
  container.appendChild(href);
  jumbotron.appendChild(container);

  return jumbotron;
}

document.body.appendChild(jumbotron());
