const progress = document.querySelector('.progress');

window.addEventListener('scroll', (e) => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let progressScroll = winScroll / winHeight * 100;
   
    progress.style.width = progressScroll + '%';
});