const slides = document.getElementsByClassName('carousel-item')
const nextBtn = document.getElementById('carousel-button-next')
const prevBtn = document.getElementById('carousel-button-prev')
const thumbnails = document.getElementsByClassName('thumbnail-item')

let slidePosition = 0
const totalSlides = slides.length

nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPrevSlide)

function resetThumbnails() {
	for (let thumbnail of thumbnails) {
		thumbnail.classList.remove('thumbnail-active')
	}
}

function resetActive(pos) {
	for (let slide of slides) {
		slide.classList.remove('carousel-item-visible')
		slide.classList.add('carousel-item-hidden')
	}
	resetThumbnails()

	slides[pos].classList.add('carousel-item-visible')
	thumbnails[pos].classList.add('thumbnail-active')
}

function moveToNextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition++
	}

	resetActive(slidePosition)
}

function moveToPrevSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1
	} else {
		slidePosition--
	}

	resetActive(slidePosition)
}

// Thumbnails

for (let i = 0; i < thumbnails.length; i++) {
	// on and off hover
	thumbnails[i].addEventListener('mouseenter', function () {
		resetThumbnails()
		thumbnails[i].classList.add('thumbnail-active')
	})
	thumbnails[i].addEventListener('mouseleave', function () {
		resetThumbnails()
		thumbnails[slidePosition].classList.add('thumbnail-active')
	})

	// on click
	thumbnails[i].addEventListener('click', function () {
		slidePosition = i
		resetActive(slidePosition)
	})
}
