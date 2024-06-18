const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const yesBtnRect = yesBtn.getBoundingClientRect();
noBtn.addEventListener('click', () => {
    question.innerHTML = 'do you my Bestfriend :)😁😁😁😁😁😁😁😁';
});
yesBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - yesBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - yesBtnRect.height)) + 1;
    yesBtn.style.left = i + 'px';
    yesBtn.style.top = j + 'px';
});