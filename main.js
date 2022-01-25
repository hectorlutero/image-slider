$(".project-detail").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".project-strip",
    autoplay: false,
    fade: true,
    autoplaySpeed: 3000
});

$(".project-strip").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    asNavFor: ".project-detail",
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1008,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});



function getCenteredSlideHeight() {
    var slides = document.querySelectorAll('.project-strip .slick-slide:not(.slick-current)')
    var centeredSlide = document.querySelector('.project-strip .slick-current')
    var featuredSlide = document.querySelector('.project-detail .slick-current')
    centeredSlide.style.transition = '0.3s all ease-in-out'
    centeredSlide.style.transform = 'scale(1.2)'
    centeredSlide.style.zIndex = 99
    centeredSlide.style.filter = 'none'
    document.querySelector('.project-strip .draggable').style.height = 40 + centeredSlide.offsetHeight + 'px'
    document.querySelector('.project-strip .slick-track').style.top = 20 + 'px'
    return
}
function setAllImagesScaleDown() {
    var slides = document.querySelectorAll('.project-strip .slick-slide:not(.slick-current)')
    slides.forEach(element => {
        element.style.transform = 'scale(1)'
        element.style.zIndex = -1
        element.style.position = 'relative'
        element.style.filter = 'blur(4px)'

    });
}

$('.slick-slide').change(function () {
    setAllImagesScaleDown()
    getCenteredSlideHeight()
    console.log('changed');

})

$('body').mouseover(function () {
    getCenteredSlideHeight()
    console.log('clicked');
    setAllImagesScaleDown()
})
