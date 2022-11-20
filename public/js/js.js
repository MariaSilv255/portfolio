const butao =document.getElementById('btn-mobile');

function menuMobile(){
    const nav =document.getElementById('nav');
    nav.classList.toggle('active');
}
butao.addEventListener('click',menuMobile);