// Mobile Menu
const hamburger = document.querySelector('#menu-mobile');
const menuLinks = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menuLinks.classList.toggle('is-active');
});

const aboutTia = document.querySelector('.about-link');
const programTia = document.querySelector('.program-link');
const joinTia = document.querySelector('.join-link');
const sponsorTia = document.querySelector('.sponsor-link');
const newsTia = document.querySelector('.news-link');

const close = () => {
  hamburger.classList.toggle('is-active');
  menuLinks.classList.toggle('is-active');
};

aboutTia.addEventListener('click', () => {
  close();
});

programTia.addEventListener('click', () => {
  close();
});

joinTia.addEventListener('click', () => {
  close();
});

sponsorTia.addEventListener('click', () => {
  close();
});

newsTia.addEventListener('click', () => {
  close();
});

const speakers = [
  {
    image: 'images/p1.jpg',
    name: 'Yochai Benkler',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },

  {
    image: 'images/p2.jpg',
    name: 'SohYeong Noh',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },

  {
    image: 'images/p3.jpg',
    name: 'Lila Tratilkov',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },

  {
    image: 'images/p4.jpg',
    name: 'Kilnam Chon',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },

  {
    image: 'images/p5.jpg',
    name: 'Julia Leda',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },

  {
    image: 'images/p6.jpg',
    name: 'Ryan Merkley',
    position: 'Lorem ipsum dolor sit amet consectetur, adipisicing.',
    brief:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur.',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  document.querySelector('.speakers-list').innerHTML += `

<div class='row justify-content-md-center'>

<div  class = 'col-md-4' > 
<img src = ${speakers[i].image} />
</div>

  <div class="col-md-4">
  <h2>${speakers[i].name}</h2>
    <p class='text-danger'>${speakers[i].position}</p>
    <p>${speakers[i].brief}</p>
</div>

</div>`;
}
