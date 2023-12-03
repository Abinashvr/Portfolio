const text = document.querySelector('.text.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Coder";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Front End Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 12000);
    setTimeout(textLoad, 16000);
};
textLoad();

