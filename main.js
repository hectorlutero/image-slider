var i = 0
var slides = []
var time = 3000

//image list
slides[0] = '/assets/imgs/slide1.jpg'
slides[1] = '/assets/imgs/slide2.jpg'
slides[2] = '/assets/imgs/slide3.jpg'

// Change Image
function changeImage () {
    document.slides.src = slides[i]

    if(i < slides.length - 1){
        i++
    } else {
        i = 0 
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage
