const root=document.documentElement;
const toggle=document.querySelector('[data-theme-toggle]');
let theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
function update(){root.dataset.theme=theme;toggle.textContent=theme==='dark'?'Light mode':'Dark mode';toggle.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} mode`)}
update();
toggle.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';update()});
