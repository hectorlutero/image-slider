$(".project-detail").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".project-strip",
    autoplay: false,
    autoplaySpeed: 3000
});

$(".project-strip").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".project-detail",
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true
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

$('.project-strip .slick-slide, .project-detail .slick-current').click(function () {
    getCenteredSlideHeight()
    console.log('clicked');
    setAllImagesScaleDown()
}).on(function () {
    getCenteredSlideHeight()
    console.log('chaged');
    setAllImagesScaleDown()
})
