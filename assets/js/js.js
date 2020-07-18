let navOpen = () => {
    let buka = document.querySelector('.icon-open');
    let menu = document.querySelector('.nav-list');

    buka.addEventListener('click', () => {
        menu.classList.toggle('nav-active');
    });
}

let navClose = () => {
    let buka = document.querySelector('.icon-close');
    let menu = document.querySelector('.nav-list');

    buka.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
}

navOpen();
navClose();