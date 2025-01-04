const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');

let slideNumber =1;
const images = document.querySelectorAll('.image');
right.addEventListener('click',()=>{
    if(slideNumber<images.length){
        slider.style.transform = `translateX(-${slideNumber*1120}px)`
        slideNumber++;
    }
    else{
        slider.style.transform = `translateX(0px)`
        slideNumber=1;
    }
})

left.addEventListener('click',()=>{
    if(slideNumber>1){
        slider.style.transform = `translateX(-${(slideNumber-2)*1120}px)`
        slideNumber--;
    }
    else{
        slider.style.transform = `translateX(-${(images.length-1)*1120}px)`
        slideNumber=images.length;
    }
})
