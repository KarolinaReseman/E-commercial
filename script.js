const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const MainImg = document.getElementById("MainImg");
const smalling = document.getElementsByClassName("small-img");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

smalling[0].onclick = function() {
    MainImg.src = smalling[0].src; 
};
smalling[1].onclick = function() {
    MainImg.src = smalling[1].src; 

};
smalling[2].onclick = function() {
    MainImg.src = smalling[2].src; 

};
smalling[3].onclick = function() {
    MainImg.src = smalling[3].src; 

};