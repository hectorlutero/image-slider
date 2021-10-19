$(() => {

    //setup
    let widht = 400
    let animationSpeed = 1000
    let pause = 3000
    let currentSlide = 1

    //cache DOM
    let $slider = $('.slider')
    let $slideContainer = $slider.find('.slides')
    let $slides = $slideContainer.find('.slide')
    let firstSlide = $slides[0]


    //setInterval
        // animate margin-left
        // if it's last slide, go to position 1 (0px);

    let interval;

    function releaseSlider () {
        
        interval =  setInterval(() => {
            $slideContainer.animate({'margin-left': `-=${widht}`}, animationSpeed, () => {
                currentSlide++
                if (currentSlide === $slides.length) {
                    currentSlide = 1 
                    $slideContainer.css({'margin-left': 0})
                }
            })
        }, pause);
    }

    function pauseSlider () {
        clearInterval(interval)
    }
    $slider.on('mouseenter', pauseSlider).on('mouseleave', releaseSlider);
        // Listem for mouseenter and pause
        // release when mouseleave


})