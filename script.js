const main = document.querySelector('main');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');
const hamburgerContainer = document.querySelector('.ham');
const hamburgerOpen = document.querySelector('.open');
const hamburgerClose = document.querySelector('.close');
let checker = 'open';


hamburgerContainer.addEventListener('click', ()=>{
    if (checker === 'open') {
        hamburgerOpen.style.display = 'none';
        hamburgerClose.style.display = 'inline';
        nav.style.display = 'flex';
        main.style.display = 'none';
        footer.style.display = 'none';
        checker = 'close';
    }
    else {
        hamburgerOpen.style.display = 'inline';
        hamburgerClose.style.display = 'none';
        nav.style.display = 'none';
        main.style.display = 'block';
        footer.style.display = 'block';
        checker = 'open';
    }
})