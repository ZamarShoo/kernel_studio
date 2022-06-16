
document.addEventListener('DOMContentLoaded', () => {

window.addEventListener('mousemove', e => {
    mouseCoords(e)
    cursor.classList.remove('hidden')
})


const cursor = document.getElementById("cursor")
const links = document.getElementsByTagName("a")



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


$('.magnetic-big .btn-text').mouseenter(function(e) {
    $('#cursor').css({ transform: 'scale(0)' });
    var bounding = this.getBoundingClientRect()
    let x = e.clientX - bounding.left;
    let y = e.clientY - bounding.top;
    $(this).children('.circle-btn').css({ border: '2px solid rgba(0,0,0,0)' });

    let ripple1 = document.createElement('span')
    ripple1.style.left = x + 'px'
    ripple1.style.top = y + 'px'
    ripple1.classList.add('ripple1')
    this.appendChild(ripple1)
})

$('.magnetic-big .btn-text').mouseleave(function(e) {
    $('#cursor').css({ transform: '' });
    setTimeout(function(e) {
        $(".ripple1").remove()
    }, 100)

    var bounding = this.getBoundingClientRect()
    let x = e.clientX - bounding.left;
    let y = e.clientY - bounding.top;

    let ripple2 = document.createElement('span')
    ripple2.style.left = x + 'px'
    ripple2.style.top = y + 'px'
    ripple2.classList.add('ripple2')
    this.appendChild(ripple2)

    $(this).children('.circle-btn').css({ border: '2px solid #FFFFFF' });

    setTimeout(function(e) {
        $(".ripple2").remove()
    }, 500)
})