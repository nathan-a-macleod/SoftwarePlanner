// Connect to DOM Elements
const cardsContainer = document.querySelector('.cards-container');
const placeholderCard = document.getElementById('placeholder-card');

// User clicks placeholderCard
placeholderCard.addEventListener('click', e => {
  placeholderCard.classList.toggle('hide-placeholder');
  createNewCard();
})

// Create New Card
function createNewCard(){
  const projectCardContainer = document.createElement('section');
  projectCardContainer.classList.add('project-card-container');

  const projectCardTitle = document.createElement('section');
  projectCardTitle.classList.add('project-card-title');
  projectCardContainer.appendChild(projectCardTitle);

  const projectCardTitleInput = document.createElement('input');
  projectCardTitleInput.type = 'text';
  projectCardTitleInput.placeholder = 'Enter a title...';
  projectCardTitle.appendChild(projectCardTitleInput);
  projectCardTitleInput.classList.add('editable');
  projectCardTitleInput.id = 'projectCardTitleInput';
  projectCardTitleInput.autofocus = true;

  const projectCardDeleteBtn = document.createElement('div');
  projectCardDeleteBtn.classList.add('project-card-delete-btn');
  projectCardTitle.appendChild(projectCardDeleteBtn);

  const projectCardEditBtn = document.createElement('div');
  projectCardEditBtn.classList.add('project-card-edit-btn');
  projectCardTitle.appendChild(projectCardEditBtn);

  const projectCardConfirmBtn = document.createElement('div');
  projectCardConfirmBtn.classList.add('project-card-edit-confirm-btn');
  projectCardConfirmBtn.innerText = 'Confirm';
  projectCardTitle.appendChild(projectCardConfirmBtn);

  const projectCardBody = document.createElement('div');
  projectCardBody.classList.add('project-card-body', 'editable');
  projectCardBody.contentEditable = 'true';
  projectCardContainer.appendChild(projectCardBody);
  projectCardEditBtn.style.opacity = 0.2;
  projectCardConfirmBtn.style.opacity = 1;
  
  // User Clicks Delete Card Button
  projectCardDeleteBtn.addEventListener('click', () => {
    if(confirm("Warning: You are about to delete this project card and everything inside it. Press OK to proceed, or cancel to cancel.")){
      cardsContainer.removeChild(projectCardContainer);
      placeholderCard.classList.toggle('hide-placeholder');
    }
  });
  projectCardContainer.classList.add('card-animate');
  cardsContainer.appendChild(projectCardContainer);

  // User Clicks Edit Button
  projectCardEditBtn.addEventListener('click', ()=> {
    projectCardTitleInput.removeAttribute('readonly');
    projectCardTitleInput.classList.add('editable');
		projectCardTitleInput.autofocus = true;
    projectCardBody.contentEditable = 'true';
    projectCardBody.classList.add('editable');
    projectCardEditBtn.style.opacity = 0.2;
    projectCardConfirmBtn.style.opacity = 1;
  })

  // User Confirms Edits
  projectCardConfirmBtn.addEventListener('click', () => {
    projectCardTitleInput.setAttribute('readonly', true);
    projectCardTitleInput.classList.toggle('editable');
    projectCardBody.contentEditable = 'false';
    projectCardBody.classList.toggle('editable');
    projectCardEditBtn.style.opacity = 1;
    projectCardConfirmBtn.style.opacity = 0;
  })
}
