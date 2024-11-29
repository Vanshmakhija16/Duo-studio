function init(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  // follwoing line is not required to work pinning on touch screen

   pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
      crsr.style.left=dets.x + 20 + "px" 
      crsr.style.top=dets.y + 20 + "px" 


})


var tl = gsap.timeline({

    scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      start:"top 27%",
      end:"top 0",
      scrub:3
    }
})


tl.to ("#page1 h1",{
x:-100,

},"anim")
tl.to("#page1 h2",{
x:100,
},"anim")

tl.to("#page1 video",{
  width:"85%",

},"anim")

var tl2 = gsap.timeline({

  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -120%",
    end:"top -130%",
    scrub:3
  }
})
tl2.to("#main",{
  backgroundColor:"#fff",
  
})

var tl3 = gsap.timeline({

  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -280%",
    end:"top -300%",
    scrub:3
  }
})

tl3.to("#main",{
  backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box")
  boxes.forEach(function(elem) {
        elem.addEventListener("mouseenter",function(){
        var att= elem.getAttribute("data-img")
        crsr.style.width ="200px"
         crsr.style.height ="150px"
        crsr.style.borderRadius="0%"
        crsr.style.backgroundImage=`url(${att})`
      console.log(att)

        
        })
    
        elem.addEventListener("mouseleave",function(){
          elem.style.backgroundColor = "transparent"
          crsr.style.width="12px"
          crsr.style.height="12px"
          borderRadius="50%"
          crsr.style.borderRadius="50%"
         
        })
    
  })
 var purple = document.querySelector("#purple")
var h3 = document.querySelectorAll("#nav h3")

h3.forEach(function(elem){

elem.addEventListener("mouseenter",function(){
  
purple.style.display="block"
purple.style.opacity="1"

})

elem.addEventListener("mouseleave",function(){
  
  purple.style.display="none"
  purple.style.opacity="0"
  
  })

})