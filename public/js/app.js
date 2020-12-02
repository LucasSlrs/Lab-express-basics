const target = document.querySelector('.first-section-btn');
const btn = document.getElementById('whoAreWe');
// const createDiv = `<div class="description">Welcome to our Website, this Yis a IronHack lab to let us
// work with Express.js as an introduction to the backend development</div>`;
// const createDiv = document.createElement('div');
// createDiv.className = "description";
// createDiv.textContent = `Welcome to our Website, this Yis a IronHack lab to let us
// work with Express.js as an introduction to the backend development`;
//rajouter un appenchild
const createDiv = document.querySelector(".description");
const hangleToggle = () => createDiv.classList.toggle('is-visible');
if (btn !== null) btn.onclick = hangleToggle;
console.log(btn);
console.log(createDiv);
// const hangleToggle = () => createDiv.classList.toggle('is-visible');





// btn.innerHTML = `<div class="description">Welcome to our Website, this Yis a IronHack lab to let us
// work with Express.js as an introduction to the backend development</div>`;
