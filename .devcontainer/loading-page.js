
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });


let t1=gsap.timeline();

function time(){
    let a=0;
    setInterval(() => {
        a=a+Math.floor(Math.random()*15);
        if(a<100){
        document.querySelector(".loader h1").innerHTML =a+"%";}
        else{
            a=100;        
            document.querySelector(".loader h1").innerHTML =a+"%";
        }
    }, 100);
};

t1.to(".loader ",{
    top:"-100vh",
    delay:1,
    duration:1.5,
})
t1.to(".loader h1 ",{
    delay:0.4,
    onStart:time(),
    duration:1,
})


t1.from(".nav h2,.nav li",{
  scale:1,
    opacity:0,
    duration:1,
    delay:0,
    stagger:.2,
})
t1.from(".center-text",{
    x:-100,
    opacity:0,
    duration:.9,
    stagger:.2,

})


gsap.to(".page-1 h1",{
     transform:"translateX(-90%)",
     fontWeight:"50",
     scrollTrigger:{
        trigger:".page-1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true,
     }
});
gsap.from(".page-2 .box",{
  x:-100,
  duration:1,
  delay:0,
  // start:"top 20%",
  stagger:.1,
  scrollTrigger:{
      trigger:".page-2 .box",
      scroller:"body",
      scrub:2,
  }
});
