document.querySelector('.fa-bars').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.side-menu').classList.add('open');
    document.querySelector('.side-menu-overlay').classList.add('active');
});

document.querySelector('.side-menu-close').addEventListener('click', function(){
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.side-menu-overlay').classList.remove('active');
});

document.querySelector('.side-menu-overlay').addEventListener('click', function(){
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.side-menu-overlay').classList.remove('active');
});
