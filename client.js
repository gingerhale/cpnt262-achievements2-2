

const box = document.querySelector('.box');
const container = document.querySelector('.container');
const callbackFunction = function(entries) {

    console.log(entries[0]);
};

const observer = new IntersectionObserver(callbackFunction,{
});

observer.observe(box);