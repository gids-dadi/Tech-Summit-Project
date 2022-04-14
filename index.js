const speakers = [
{
  image: 'images/p1.jpg',
  name: 'Yochai Benkler',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
},

{
  image: 'images/p2.jpg',
  name: 'SohYeong Noh',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
},

{
  image: 'images/p3.jpg',
  name: 'Lila Tratilkov',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
},

{
  image: 'images/p4.jpg',
  name: 'Kilnam Chon',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
},

{
  image: 'images/p5.jpg',
  name: 'Julia Leda',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
},

{
  image: 'images/p6.jpg',
  name: 'Ryan Merkley',
  position: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
  brief: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo praesentium quo laudantium.',
}
]


for (let i = 0; i < speakers.length; i += 1) {
 document.querySelector('.speakers-list').innerHTML += `
<div class='row m-2'>

<div  class = 'col' > 
<img src = ${speakers[i].image} />

</div>

  <div class="col">
  <h2>${speakers[i].name}</h2>
    <p class='text-danger'>${speakers[i].position}</p>
    <p>${speakers[i].brief}</p>
</div>

    </div>`;
}

/* <div class='></div>
    <div class="work-">
      <h2>${cardDetails[0].title}</h2>
      <p>${cardDetails[0].cardText}</p>
      <div class "tech-list ">
               <ul>
                    <li>${techList}</li>
                </ul>
               </div>
              <button
               class="hint-button works-button"
               type="button"
               data-index="${i}"
            >
               See Project
             </button>
                </div> */