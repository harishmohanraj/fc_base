document.addEventListener("DOMContentLoaded", function(event) {
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];
    var sliderElement =document.querySelectorAll(".item-wrapper > .item");
    var length = document.querySelectorAll(".item-wrapper > .item").length;
    var current = 0;

    function carousel(direction){
        //current = direction;
        sliderElement[current].classList.remove("active");
        current = current + direction;
        if(direction > 0 && current >= length){
            current = 0;
        }else if(direction < 0 && current < 0 ){
            current = length-1;
        }
        console.log(current);
        sliderElement[current].className +=" active";
    }

    //next.addEventListener("click", carousel(1));
    //prev.addEventListener("click", carousel(-1));

    carousel(0);
    next.addEventListener("click", function(){
        carousel(1);
    });
    prev.addEventListener("click", function(){
        carousel(-1);
    });
});