const btn = document.getElementById("whoAreWe");
const sec = document.querySelector('.fisrt-section');

const handleToggle = () => sec.classList.toggle("is-active");
if (btn !== null) btn.onclick = handleToggle;