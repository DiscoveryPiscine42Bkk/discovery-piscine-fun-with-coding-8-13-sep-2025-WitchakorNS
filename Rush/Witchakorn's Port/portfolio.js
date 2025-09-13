const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            burger.innerHTML = '✕';
            burger.style.color = '#000000ff';
        } else {
            burger.innerHTML = '☰';
            burger.style.color = '#000000ff';
        }
    });

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            burger.innerHTML = '☰';
            burger.style.color = '#000000ff';
        });
    });

    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            burger.innerHTML = '☰';
            burger.style.color = '#000000ff';
        }
    });