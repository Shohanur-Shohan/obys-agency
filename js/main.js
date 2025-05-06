gsap.from("#home-text",{
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
//text reveal from bottom in loader

//counter in loader
const heroCounter = document.querySelector("#hero-counter");
let heroCount = 0;

const interval = setInterval(function(){
    if(heroCount <= 100){
       heroCounter.innerHTML = heroCount++;
    }
    else {
        clearInterval(interval); // থামিয়ে দেওয়া হবে যখন শেষ হবে
    }
}, 16);
