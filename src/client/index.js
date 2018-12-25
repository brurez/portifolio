import Typed from 'typed.js';

import events from './events';
import scrollDevagar from './scrollDevagar';

new Typed('.type-here', {
  strings: [
    'Hi^200, my name is Bruno de Rezende.^800 I am a Javascript developer skilled at working with both front-end and back-end.',
    'Hi, my name is Bruno de Rezende. I am what is called nowadays a fullstack developer.'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true
});

scrollDevagar();

document.querySelector('#ano').innerHTML = new Date().getFullYear();

const skills = [
  {
    nome: 'React',
    p: 100,
    cor: '#53c1de',
    icon: '<i class="devicon-react-original"></i>'
  },
  {
    nome: 'Redux',
    p: 95,
    cor: '#7b4bc1',
    icon: '<i class="devicon-atom-original"></i>'
  },
  {
    nome: 'MongoDB',
    p: 70,
    cor: '#449a45',
    icon: '<i class="devicon-mongodb-plain"></i>'
  },
  {
    nome: 'Express',
    p: 80,
    cor: '#555',
    icon: '<i class="devicon-express-original"></i>'
  },
  {
    nome: 'Meteor',
    p: 95,
    cor: '#de4f4f',
    icon: '<i class="devicon-meteor-plain"></i>'
  },
  {
    nome: 'Wordpress',
    p: 90,
    cor: '#0087be',
    icon: '<i class="devicon-wordpress-plain"></i>'
  },
  {
    nome: 'SQL',
    p: 50,
    cor: '#00618a',
    icon: '<i class="devicon-mysql-plain"></i>'
  },
  {
    nome: 'Gulp',
    p: 80,
    cor: '#CF4647',
    icon: '<i class="devicon-gulp-plain"></i>'
  },
  {
    nome: 'Webpack',
    p: 66,
    cor: '#1d72b3',
    icon: '<i class="devicon-webpack-plain"></i>'
  },
  {
    nome: 'JS ES6',
    p: 90,
    cor: '#f5da55',
    icon: '<i class="devicon-javascript-plain"></i>'
  },
  {
    nome: 'Ruby',
    p: 60,
    cor: '#CC342D',
    icon: '<i class="devicon-ruby-plain"></i>'
  },
  {
    nome: 'PHP',
    p: 70,
    cor: '#8892bf',
    icon: '<i class="devicon-php-plain"></i>'
  },
  {
    nome: 'CSS3',
    p: 80,
    cor: '#1b73ba',
    icon: '<i class="devicon-css3-plain"></i>'
  },
  {
    nome: 'Sass/Less',
    p: 80,
    cor: '#c69',
    icon: '<i class="devicon-sass-original"></i>'
  },
  {
    nome: 'HTML5',
    p: 90,
    cor: '#e44d26',
    icon: '<i class="devicon-html5-plain"></i>'
  },
  {
    nome: 'Git',
    p: 80,
    cor: '#f0502f',
    icon: '<i class="devicon-git-plain"></i>'
  }
];

const skillsElem = document.querySelector('#skills');

skills.forEach(skill => {
  skillsElem.innerHTML += `          
          <div class="skillbar clearfix " data-percent="${skill.p}%">
            <div class="skillbar-title" style="background: ${skill.cor};"><span>${skill.icon} ${skill.nome}</span></div>
            <div class="skillbar-bar" style="background: ${skill.cor};"></div>
            <div class="skill-bar-percent">${skill.p}%</div>
          </div>`;
});

const interval = setInterval(() => {
  if (isScrolledIntoView(document.querySelector('.skillbar'))) {
    for (let item of document.querySelectorAll('.skillbar')) {
      item.querySelector('.skillbar-bar').style.width = item.getAttribute(
        'data-percent'
      );
    }
    clearInterval(interval);
  }
}, 300);

events();

function isScrolledIntoView(el) {
  const { top, bottom } = el.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight;
}
