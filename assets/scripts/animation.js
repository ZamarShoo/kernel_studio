pageTransition = () => {
  
  var timeline = gsap.timeline();

  timeline.to("header", {
      zIndex: 1
  });

  timeline.to(".page-transition", {
      duration: .5,
      height: "100%",
      top: "0%"
  });

  timeline.to(".page-transition", {
      duration: .5,
      height: "100%",
      top: "100%",
      delay: .7
  });

  timeline.set(".page-transition", {
      top: "-100%",
      height: "0%",
  });
}

mainAnimation = () => {
  var timeline = gsap.timeline();
  
  timeline.from("h1", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: {
          amount: .4
      },
      delay: .8
  });
}

delay = (n) => {
  n = n || 2000;
  return new Promise((done)=> {
      setTimeout(()=> {
          done();
      }, n);
  })
}

barba.init({
  sync: true,
  transitions: [
      {
          async leave(data){
              const done = this.async();
              pageTransition();
              await delay(700);
              done();
          },

          async enter ({next}){
            $('.page-transition').html(`<p>${next.container.dataset.title}</p>`)
              mainAnimation();
          },

          async once(data){
              mainAnimation();
          }
      }
  ]
});