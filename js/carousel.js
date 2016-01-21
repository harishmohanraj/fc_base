document.addEventListener("DOMContentLoaded", function(event) {
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    var sliderElement = document.querySelectorAll(".item-wrapper > .item");
    var length = document.querySelectorAll(".item-wrapper > .item").length;
    var current = 0,
        dotsElementWrapper = document.getElementsByClassName("indicators")[0];

    function createDots(len) {
        for (var i = 0, j = len; i < j; i++) {
            dotsElement = document.createElement('li');
            dotsElement.setAttribute('id', i);
            dotsElement.className = 'indicator-item';
            dotsElementWrapper.appendChild(dotsElement);
        }
    }

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

    function dotsClick(e) {
        sliderElement[current].classList.remove("active");
        e.target.className += " active";
    }

    function carousel(direction) {
        sliderElement[current].classList.remove("active");
        current = current + direction;
        if (direction > 0 && current >= length) {
            current = 0;
        } else if (direction < 0 && current < 0) {
            current = length - 1;
        }
        sliderElement[current].className += " active";
        setCurrentDots(current, direction);
        console.log(current)
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