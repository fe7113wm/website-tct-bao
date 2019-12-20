$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3500
      });

      var tl = new TimelineMax();
      tl.from("#stories", 1, {
        opacity: 0
    }, "=-1");
      tl.to("#stories", 0.5, {
        opacity: 1
    })

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: ".welcome",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".welcome")
    .setTween(tl)
    .addTo(controller)










      
      //document.ready function ends here
});

