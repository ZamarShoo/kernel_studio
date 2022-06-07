
document.addEventListener('DOMContentLoaded', () => {

window.addEventListener('mousemove', e => {
    mouseCoords(e)
    cursor.classList.remove('hidden')
})

var navHeaderElem = 0
const cursor = document.getElementById("cursor")
const links = document.getElementsByTagName("a")

const navHeader = document.getElementsByClassName("nav-link")

mouseX = 0, mouseY = 0, posX = 0, posY = 0

function mouseCoords(e) {
    mouseX = e.pageX
    mouseY = e.pageY
}
gsap.to({}, .01, {
    repeat: -1,
    onRepeat: () => {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
    
})

for(let i = 0; i < links.length; i++) {

    links[i].addEventListener('mouseover', () => {
        cursor.classList.add('active')
    })

    links[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active')
    })

}

window.addEventListener('mouseout', () => {
    cursor.classList.add('hidden')
})
})

var magnets = document.querySelectorAll('.magnetic')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()


  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })
}