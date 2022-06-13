$('.burger').click(function(e) {
    e.preventDefault()
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
    $('.header-right, .header-right nav, .header-right .mobile-nav').removeClass('active')
})