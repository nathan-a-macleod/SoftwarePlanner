// Attach buttons to DOM
const addProjectCardBtn = document.querySelector('.add-card-btn');
const addProjectCardBodyBtn = document.querySelector('.add-card-body');

 // Listen for clicks on buttons
 addProjectCardBtn.addEventListener('click', e => {
   console.log('add project card button was clicked');
 })

 addProjectCardBodyBtn.addEventListener('click', e => {
   console.log('add card body button was clicked');
 })