const butao =document.getElementById('btn-mobile');

function menuMobile(){
    const nav =document.getElementById('nav');
    nav.classList.toggle('active');
}
butao.addEventListener('click',menuMobile);



function fadeIn(time) {
    var element = document.getElementById('sobre');
    processa(element, time, 0, 100);
}

function processa(element, time, initial, end) {
    if (initial == 0) {
        increment = 2;
        element.style.display = "block";
    } else {
        increment = -2;
    }
    opc = initial;

    intervalo = setInterval(() => {
        if ((opc == end)) {
            if (end == 0) {
                element.style.display = "none";
            }
            clearInterval(intervalo);
        } else {
            opc += increment;
            element.style.opacity = opc / 100;
            element.style.filter = "alpha(opacity=" + opc + ")";
        }
    }, time * 10);
}
fadeIn(2);

