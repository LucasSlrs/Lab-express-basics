const target = document.querySelector('.first-section-btn');
const btn = document.getElementById('whoAreWe');
const createDiv = `<div class="description">Welcome to our Website, this Yis a IronHack lab to let us
// work with Express.js as an introduction to the backend development</div>`;

const hangleToggle = () => btn.classList.toggle('is-visible', createDiv);
if (btn !== null) btn.onclick = hangleToggle;




// btn.innerHTML = `<div class="description">Welcome to our Website, this Yis a IronHack lab to let us
// work with Express.js as an introduction to the backend development</div>`;
