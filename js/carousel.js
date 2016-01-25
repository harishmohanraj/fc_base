document.addEventListener("DOMContentLoaded", function(event) {
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    var sliderElement =document.querySelectorAll(".carousel-component .carousel-wrapper .carousel-item-container > .item");
    var length = document.querySelectorAll(".carousel-component .carousel-wrapper .carousel-item-container > .item").length;
    var current = 0,
        dotsElementWrapper = document.getElementsByClassName("indicators")[0];
    var contentSlider = document.getElementsByClassName("carousel-item-container")[0];
    var sliderWidth = sliderElement[0].offsetWidth;
    var newWidth;
    // Creating the dots dynamically based on the length of the slide
    function createDots(len) {
        for (var i = 0, j = len; i < j; i++) {
            dotsElement = document.createElement('li');
            dotsElement.setAttribute('id', i);
            dotsElement.className = 'indicator-item';
            dotsElementWrapper.appendChild(dotsElement);
        }
    }
    // Setting the current active dots
    function setCurrentDots(current, direction) {
        var dotsList = dotsElementWrapper.querySelectorAll('.indicator-item'),
            previousDot = current - direction;

        if (direction > 0 && previousDot < 0) {
            previousDot = length - 1;
        } else if (direction < 0 && previousDot >= length) {
            previousDot = 0;
        }
        dotsList[previousDot].classList.remove("active");
        dotsList[current].className += " active";
    }
    // Slider navigation function
    function carousel(direction) {
        //sliderElement[current].classList.remove("active");

        current = current + direction;
        newWidth = (direction === 0 ) ? 0 : -(current * sliderWidth);
        contentSlider.style.width = sliderWidth * length+"px";
        console.log(contentSlider.offsetWidth)
        //document.getElementsByClassName('item').style.width = '300px';
        if (direction > 0 && current >= length) {
            current = 0;
            newWidth = 0;
        } else if (direction < 0 && current < 0) {
            current = length - 1;
            newWidth = -(current * sliderWidth);
        }
        //sliderElement[current].className += " active";
        contentSlider.style.left = newWidth+"px";
        setCurrentDots(current, direction);
    }

    createDots(length);

    carousel(0);

    next.addEventListener("click", function() {
        carousel(1);
    });

    prev.addEventListener("click", function() {
        carousel(-1);
    });

    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.classList[0] === 'indicator-item') {
            carousel(parseInt(e.target.id) - current);
        }
    });
});