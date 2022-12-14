const animation = document.querySelector('p.animation');
const animationEventLog = document.querySelector('.animation-example>.event-log');
const applyAnimation = document.querySelector('.animation-example>button.activate');
let iterationCount = 0;

animation.addEventListener('animationstart', () => {
    animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener('animationiteration', () => {
    iterationCount++;
    animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener('animationend', () => {
    animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
    animation.classList.remove('active');
    applyAnimation.textContent = "Activate animation";
});

animation.addEventListener('animationcancel', () => {
    animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener('click', () => {
    animation.classList.toggle('active');
    animationEventLog.textContent = '';
    iterationCount = 0;
    const active = animation.classList.contains('active');
    applyAnimation.textContent = active ? "Cancel animation" : "Activate animation";
});