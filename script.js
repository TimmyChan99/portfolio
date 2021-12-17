const getnav = document.querySelector('.mobile_menu');
function mobileMenu() {
  getnav.style.visibility = 'visible';
}
function closeMenu() {
  getnav.style.visibility = 'hidden';
}

mobileMenu();
closeMenu();

/// ///////////  Model Window

const project = [{
  id: '1',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '2',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '3',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
}, {
  id: '4',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '5',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '6',
  name: 'Keeping track of hundreds of components',
  title: 'Multi-Post Stories Gain+Glory',
  desription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: './images/proj_img_desktop.svg',
  img_mobile: './images/proj_img_mobile.svg',
  placeholder_img: './images/Im_Plaholder2.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
];

/// //////////////////////////// Add Project Cards

const workSection = document.querySelector('.cards');

for (let i = 0; i < project.length; i += 1) {
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
      <a id=${project[i].id} onclick="openModal(id)" class="see_project" href="#">See Project</a>
    </div>`;
}

/// ///////////////////////// Popup Window

const modal = document.querySelector('#bg_modal');

function closeModal() {
  modal.style.visibility = 'hidden';
}

function openModal(id) {
  modal.style.visibility = 'visible';

  for (let i = 0; i < project.length; i += 1) {
    if (id === project[i].id) {
      modal.innerHTML = `<div class="modal_window" id="model_window">
      <img onclick="closeModal()" class="close_btn" src="./images/close_btn.svg" alt="">
      <img class="project_img_desktop" src=${project[i].img_desktop} alt="project">
      <img onclick="closeModal()" class="project_img_mobile" src=${project[i].img_mobile} alt="project">
      <h2 class="project_title">${project[i].name}</h2>
      <ul class="tech_list languages_used">
        <li><a href="#">${project[i].technologies[0]}</a></li>
        <li><a href="#">${project[i].technologies[1]}</a></li>
        <li><a href="#">${project[i].technologies[2]}</a></li>
      </ul>
      <ul class="feature_list">
        <li><a href="#">${project[i].feature_list[0]}</a></li>
        <li><a href="#">${project[i].feature_list[1]}</a></li>
        <li><a href="#">${project[i].feature_list[2]}</a></li>
        <li><a href="#">${project[i].feature_list[2]}</a></li>
        <li><a href="#">${project[i].feature_list[3]}</a></li>
        <li><a href="#">${project[i].feature_list[5]}</a></li>
      </ul>
      <p class="project_decription">${project[i].desription}</p>
      <div class="modal_btns">
        <a class="modal_btn" href=${project[i].live_version}><span>See Live</span><img class="btn_icon" src="./images/Iive_icon.svg"
            alt="live icon"></a>
        <a class="modal_btn" href=${project[i].source_link}><span>See Source</span><img class="btn_icon" src="./images/github_btn.svg"
            alt="live icon"></a>
      </div>
    </div>`;
    }
  }
}
openModal();
closeModal();

/// //////////////////////// Add Validation

const form = document.querySelector('#submit_form');
const emailAdrdress = document.getElementById('email');

const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const msgError = document.querySelector('#message_error');
const msgSuccess = document.querySelector('#message_success');

form.addEventListener('submit', (e) => {
  if (!emailAdrdress.value.match(emailPattern)) {
    e.preventDefault();
    msgError.classList.toggle('error');

    setTimeout(() => { msgError.classList.toggle('error'); }, 3000);
  } else {
    msgSuccess.classList.toggle('success');

    setTimeout(() => { form.submit(); }, 2000);
  }
});
