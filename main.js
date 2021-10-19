var i = 0
var slides = []
var time = 3000

//image list
slides[0] = 'slide1.jpg'
slides[1] = 'slide2.jpg'
slides[2] = 'slide3.jpg'

// Change Image
function changeImage () {
    document.slide.src = images[i]

    if(i < images.length - 1){
        i++
    } else {
        i = 0 
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage
