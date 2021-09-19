document.querySelector('.icon-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.body.classList.toggle('lock');
})

window.addEventListener('scroll',() => headerShadow(window.pageYOffset));

function headerShadow(scrollTop){
    if(scrollTop > 50){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}





