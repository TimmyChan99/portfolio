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
  title: 'To-Do List',
  desription: "To-Do List web app that helps to organize your day. You can add, remove, check the completed tasks, and store your list in your browser (local storage). Build using Webpack and JavaScript.",
  technologies: ['Webpack', 'css', 'JavaScript', 'html'],
  img_desktop: 'https://timmychan99.github.io/portfolio/images/todo3.png',
  img_mobile: 'https://timmychan99.github.io/portfolio/images/todo3.png',
  placeholder_img: 'https://timmychan99.github.io/portfolio/images/todo3.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/portfolio/',
  source_link: 'https://timmychan99.github.io/portfolio/',
},
{
  id: '2',
  name: 'Keeping track of hundreds of components',
  title: 'myBudget',
  desription: "myBudget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  img_desktop: 'https://user-images.githubusercontent.com/92228303/170263769-0b17b360-a5e0-4ccc-a820-e2275e1bc0a8.png',
  img_mobile: 'https://user-images.githubusercontent.com/92228303/170263769-0b17b360-a5e0-4ccc-a820-e2275e1bc0a8.png',
  placeholder_img: 'https://user-images.githubusercontent.com/92228303/170263769-0b17b360-a5e0-4ccc-a820-e2275e1bc0a8.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://mybudget-railsapp.herokuapp.com/',
  source_link: 'https://github.com/TimmyChan99/Budget-app',
},
{
  id: '3',
  name: 'Keeping track of hundreds of components',
  title: 'Covid-19 Tracker',
  desription: "Covid-19 Tracker is a mobile web application that provides the user the new cases of Covid-19 for each country and also the regions within the country by getting all the data and the statistics from Narrativa.",
  technologies: ['React', 'css', 'JavaScript', 'Redux'],
  img_desktop: 'https://user-images.githubusercontent.com/92228303/157505422-7afd491f-af55-4c5f-a011-35aec3d8c2cb.png',
  img_mobile: 'https://user-images.githubusercontent.com/92228303/157505422-7afd491f-af55-4c5f-a011-35aec3d8c2cb.png',
  placeholder_img: 'https://user-images.githubusercontent.com/92228303/157505422-7afd491f-af55-4c5f-a011-35aec3d8c2cb.png',
  feature_list: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://timmychan99.github.io/covid19-tracker/',
  source_link: 'https://github.com/TimmyChan99/covid19-tracker',
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
