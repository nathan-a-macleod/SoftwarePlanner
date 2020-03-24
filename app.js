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
  projectCardTitleInput.placeholder = 'New Project Card';
  projectCardTitle.appendChild(projectCardTitleInput);

  const projectCardDeleteBtn = document.createElement('div');
  projectCardDeleteBtn.classList.add('project-card-delete-btn');
  projectCardDeleteBtn.innerText = 'X';
  projectCardTitle.appendChild(projectCardDeleteBtn);

  const projectCardBody = document.createElement('div');
  projectCardBody.contentEditable = 'true';
  projectCardBody.classList.add('project-card-body');
  projectCardContainer.appendChild(projectCardBody);
  
  // User Clicks Delete Card Button
  projectCardDeleteBtn.addEventListener('click', () => {
    cardsContainer.removeChild(projectCardContainer);
    placeholderCard.classList.toggle('hide-placeholder');
  });
  projectCardContainer.classList.add('card-animate');
  cardsContainer.appendChild(projectCardContainer);
}
