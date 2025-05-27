
// Start counter FIRST — OUTSIDE timeline
const heroCounter = document.querySelector("#hero-counter1");
let heroCount = 0;

const interval = setInterval(function () {
    if (heroCount <= 100) {
        heroCounter.innerHTML = heroCount++;
    } else {
        clearInterval(interval);
    }
}, 20);

// Create GSAP timeline
var tl = gsap.timeline();

// Start text reveal slightly after counter begins
tl.from("#home-text", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.2 // make it fast enough to start while counter runs
});

// Reveal counter elements (like fade in effect)
tl.from("#hero-counter1, #hero-counter2", {
    opacity: 0,
    duration: 0.5,
}, "<"); // "<" means start this at same time as previous step

// Hide loader after animations
tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay: 3,
    onComplete: ()=>{
        document.querySelector("#loader").style.display = "none";   //display none of loader after load done
    }
});

// Reveal page
tl.from("#page1", {
    opacity: 0,
    duration: 0.6,
    y: 1200,
});


//cursor animated
document.addEventListener("mousemove", (dets)=>{
    gsap.to("#custom-cursor",{
        left: dets.x,
        top: dets.y
    })
})

//magnet effect at header
Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


// Start text reveal of hero after loader animation
tl.from("#hero-text", {
    y: 150,
    stagger: 0.2
})

// /hero-image-animation


