function allScripts() {
    
    $('.burger').click(function(e) {
        e.preventDefault()
        $('html, body').css({
            overflowY: 'hidden'
        });
        $('.header-right').addClass('active')
        setTimeout(() => {
            $('.header-right nav').addClass('active')
        }, 300)
    
        setTimeout(() => {
            $('.header-right .mobile-nav').addClass('active')
        }, 850)
    })
    
    $('i.close').click(function(e) {
        e.preventDefault()
        $('html, body').css({
            overflow: 'hidden'
        });
        $('.header-right, .header-right nav, .header-right .mobile-nav').removeClass('active')
    })
    
    $('.open_modal').click(function(e) {
        e.preventDefault()
    
        $('.open-modal').addClass('active')
        $('#cursor').addClass('modal')
    
        $('html, body').css({
            overflow: 'hidden'
        });
    })
    
    $('.close_modal, .div_close').click(function(e) {
        e.preventDefault()
    
        $('.open-modal').removeClass('active')
        $('#cursor').removeClass('modal')
    
        $('html, body').css({
            overflow: 'auto'
        });
    })


    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime    : 1200,
        // Размер шага в пикселях 
        stepSize         :105,
    
        // Дополнительные настройки:
        
        // Ускорение 
        accelerationDelta : 30,  
        // Максимальное ускорение
        accelerationMax   : 2,   
    
        // Поддержка клавиатуры
        keyboardSupport   : true,  
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll       : 50,
    
        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,
    
        // Поддержка тачпада
        touchpadSupport   : true,
    })
    
    
    
    
    let modal = document.querySelector('.modalIn')
    
    document.addEventListener('click', function(e) {
        if(e.target === modal) {
            $('.open-modal').removeClass('active')
            $('#cursor').removeClass('modal')
    
            $('html, body').css({
                overflow: 'auto'
            });
        }
    })
    
    document.addEventListener("keydown", function(event) {
        if(event.key === "Escape") {
            $('.open-modal').removeClass('active')
            $('#cursor').removeClass('modal')
    
            $('html, body').css({
                overflow: 'auto'
            });
        }
    })



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
    
    $('.portfolio .item .article-item--images').mouseenter(function(e) {
        $('#cursor_portfolio').addClass('active')
    })
    
    $('.portfolio .item .article-item--images').mouseleave(function(e) {
        $('#cursor_portfolio').removeClass('active')
    })
    
    $('.service article').mouseenter(function(e) {
        $('#cursor_service').addClass('active')
        $('#cursor').addClass('active_noScale')
    })
    
    $('.service article').mouseleave(function(e) {
        $('#cursor_service').removeClass('active')
        $('#cursor').removeClass('active_noScale')
    })
    
    $('details').mouseenter(function(e) {
        if(!$(this)[0].hasAttribute("open")) {
            $('#cursor_service').addClass('active')
            $('#cursor').addClass('active_noScale')
        }
    })
    
    $('details').click(function(e) {
        if(!$(this)[0].hasAttribute("open")) {
            $('#cursor_service').removeClass('active')
            $('#cursor').removeClass('active_noScale')
        } else {
            $('#cursor_service').addClass('active')
            $('#cursor').addClass('active_noScale')
        }
    })
    
    $('details').mouseleave(function(e) {
        $(this).removeClass('active')
        $('#cursor_service').removeClass('active')
        $('#cursor').removeClass('active_noScale')
    })

    $("#cursor").removeClass("active hidden")

    let data_select = "phone"

    $(".select_input li").click(function(e) {
        $(`#label_${data_select}`).hide()
        $(`#label_${data_select}`).removeClass('active')
        $(`#${data_select}`).removeClass('active')
        data_select = $(this).attr("data-select")
        $(`#${data_select}`).addClass('active')
        $(`#label_${data_select}`).show()
        $(`#label_${data_select}`).addClass('active')
    })

    $('#person_name, .selected_input .active input').on('input', function(e) {
        $(this).removeClass('error')
    })

    $('.btn-form').click(function(e) {

        let err = 0

        if (!$('#person_name').val().length) {
            $('#person_name').addClass('error')
            err = 1
        }

        if (!$('.selected_input .active input').val().length) {
            $('.selected_input .active input').addClass('error')
            err = 1
        }

        if (!err) {
            console.log($('#person_name').val())
            console.log($('.selected_input .active input').val())

            $('.popup_form').css('opacity', 0)
            setTimeout(() => {
                $('.popup_form').hide()
                $('.modalIn').css('height', '100%')
                $('.popup').css('height', '500px')
                $('.popup').css('width', '700px')
                $('.popup').addClass('thanks')
                $('.thanks_popup').show()
            }, 400)
            setTimeout(() => {
                $('.thanks_popup').css('opacity', 1)
            }, 600)
            // $.ajax({
            //     url: "",
            //     data: {

            //     }
            // }).done(function() {
            //     $( this ).addClass( "done" );
            // });
        }
    })
}

allScripts()

    barba.hooks.afterEnter(() => {
        allScripts()
    });