// Connect to DOM Elements
const cardsContainer = document.querySelector('.cards-container');
const placeholderCard = document.getElementById('placeholder-card');
var addTextButtonClicked = false;

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
  projectCardTitleInput.placeholder = 'Title text...';
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

  const projectCardBody = document.createElement('div'); // I can't work out a way to add placeholder text to a content-editable div...
  projectCardBody.classList.add('project-card-body', 'editable');
  projectCardBody.contentEditable = 'true';
  projectCardContainer.appendChild(projectCardBody);
  projectCardEditBtn.style.opacity = 0.2;
  projectCardConfirmBtn.style.opacity = 1;
	
	/**/
  const projectCardNewBlock = document.createElement('div');
  projectCardNewBlock.classList.add('add-project-block');
  projectCardContainer.appendChild(projectCardNewBlock);
  const projectCardNewBlockText = document.createElement('p');
  projectCardNewBlockText.innerHTML = '+';
  projectCardNewBlock.appendChild(projectCardNewBlockText);
  const addTextButton = document.createElement('button');
  addTextButton.classList.add('add-text-button');
  projectCardNewBlock.appendChild(addTextButton);
  addTextButton.innerHTML = 'Click to add more text...';
	addTextButton.style.visibility = "hidden";
  const greyHR = document.createElement('div');
  greyHR.classList.add('grey-hr');
  projectCardNewBlock.appendChild(greyHR);
	const addImageButton = document.createElement('button');
	addImageButton.classList.add('add-image-button');
	projectCardNewBlock.appendChild(addImageButton);
	addImageButton.innerHTML = 'Click to add an image...';
	addImageButton.style.visibility = "hidden";
  
  // User Clicks Delete Card Button
  projectCardDeleteBtn.addEventListener('click', () => {
    if(confirm("Warning: You are about to delete this project card and everything inside it. Press OK to proceed, or cancel to cancel.")){
      cardsContainer.removeChild(projectCardContainer);
      placeholderCard.classList.toggle('hide-placeholder');
    }
  });
  projectCardContainer.classList.add('card-animate');
  cardsContainer.appendChild(projectCardContainer);
	
	if (addTextButtonClicked == false){
		// User Clicks To Add A New Block
		projectCardNewBlock.addEventListener('click', ()=> {
			addTextButtonClicked = true;
			
			// Runs the same code as it does when the user confirms edits
			projectCardTitleInput.setAttribute('readonly', true);
			projectCardTitleInput.classList.remove('editable');
			projectCardBody.contentEditable = 'false';
			projectCardBody.classList.remove('editable');
			projectCardEditBtn.style.opacity = 1;
			projectCardConfirmBtn.style.opacity = 0;

			projectCardNewBlock.classList.add('add-project-block-clicked'); // When the user clicks the button, it adds a new class to be reference in the css.
			addTextButton.style.visibility = "visible";
			addImageButton.style.visibility = "visible";
		})
	}
	
	addTextButton.addEventListener('click', ()=> {
		// What It should do when the user clicks the button 
  })

  // User Clicks Edit Button
  projectCardEditBtn.addEventListener('click', ()=> {
    projectCardTitleInput.removeAttribute('readonly');
    projectCardTitleInput.classList.add('editable');
		projectCardTitleInput.focus();
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
