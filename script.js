var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4all = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x -100 +"px";
    blur.style.top = dets.y -100 +"px";
});

h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3.5;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});


gsap.to("#nav", {
    backgroundColor : "#000",
    height: "110px",
    duration: 12,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        // end: "top -11%",
        scrub: 1
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        sroll: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 5
    },
});

gsap.from("#about-us img, #about-us-in, #note", {
    y: 90,
    opacity: 0,
    duration: 0.5,
    // stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        scrub: 3
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        scrub: 4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        scrub: 4,
    },
});

gsap.from("#page4 h1", {
    y: 50,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,        
    },
});

