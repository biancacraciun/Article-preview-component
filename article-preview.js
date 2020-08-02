const date = document.getElementById('date');
const today = new Date(2020, 06, 28).toDateString();

date.innerText = today;

const socialContainer = document.getElementById('social');

const shareButton = document.querySelector('button[type=button]');
const socialShare = document.getElementsByClassName('social-share')[0];

const visibility = () => {
    socialShare.style.visibility = 'visible';
}

const hidden = () => {
    socialShare.style.visibility = 'hidden';
}

shareButton.addEventListener('mouseenter', visibility);
document.addEventListener('click', hidden);
