const getnav = document.querySelector('.mobile_menu');
function mobileMenu() {
  getnav.style.visibility = 'visible';
}
function closeMenu() {
  getnav.style.visibility = 'hidden';
}

mobileMenu();
closeMenu();

//////////////  Model Window


const project = [{
  id: '1',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '2',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '3',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},{
  id: '4',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '5',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '6',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails','css','JavaScript','html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit','GitHub','Javascript','Bootstrap','Terminal','Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
}
]

const workSection = document.querySelector('.cards');

for ( let i=0; i<project.length; i+=1){

  workSection.innerHTML += `
  <div class="card">
    <img class="img_placeholder" src=${project[i].placeholder_img} alt="Img_Plaholder" />
    <div class="project_info">
      <h4 class="project_name">${project[i].title}</h4>
      <ul class="languages_used">
        <li><a href="#">${project[i].technologies[0]}</a></li>
        <li><a href="#">${project[i].technologies[1]}</a></li>
        <li><a href="#">${project[i].technologies[2]}</a></li>
        <li><a href="#">${project[i].technologies[3]}</a></li>
      </ul>
      <a id=${project[i].id} class="see_project" href="#">See Project</a>
    </div>`
}