let search3 = document.getElementById('search3'),
    overSearch3 = document.getElementById("over-search3"),
    overClose3 = document.getElementById("over-close3"),
    above3 = document.getElementById("above3"),
    shows3 = document.getElementById("shows3");
search3.onclick = function(t){
    t.preventDefault();
    overSearch3.style.display = 'block';
}
overClose3.onclick = function(y){
    y.preventDefault();
    overSearch3.style.display = "none"
}
above3.onmouseover = function(){
    shows3.style.opacity = 1;
    shows3.style.visibility = "visible";
}
above3.onmouseout = function(){
    shows3.style.opacity = 0;
    shows3.style.visibility = "hidden";
}

let image10 = document.getElementsByClassName("image12"),
    smallImage = document.getElementsByClassName("smallImage"),
    defaulter = document.getElementById("default");
function clicker(w,E){
    for(var i = 0 ; i < image10.length; i++){
        image10[i].style.display = "none"
    }
    for(var i = 0 ; i < smallImage.length; i++){
        smallImage[i].classList.remove("country")
    }
    document.getElementById(w).style.display = "block";
    E.currentTarget.classList.add("country");
}

let pluser = document.getElementById("plus"),
    minuser = document.getElementById("minus"),
    input = document.getElementById("input"),
    prices = document.getElementById("prices");

function myIncrease(){
    pluser.addEventListener("click" , function(){
        var p = input.value++;
        
        prices.innerHTML = p * 215.00 + 215.00 ;
    })
    
}
myIncrease()

function myDecrease(){
    minuser.addEventListener("click" , function(){
        if(input.value <= 1){
            input.value
        }else{
            var m = input.value--;
            prices.innerHTML -= 215.00
        }
    })
    
}
myDecrease()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let tabs = document.getElementsByClassName("tabcontent"),
    tabColor = document.getElementsByClassName("tabColor");
function myTab(x,l){
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
    }
    for(var i = 0 ; i < tabColor.length; i++){
        tabColor[i].classList.remove("addingColor")
    }
    document.getElementById(x).style.display = "block";
    l.currentTarget.classList.add("addingColor")
}
document.getElementById("default").classList.add("addingColor")

let review = document.getElementById("review"),
    form = document.getElementById("form");
review.onclick = function(){
    if(form.style.display == "block"){
        form.style.display = "none"
    }else{
        form.style.display = "block"
    }
}

    
//$(document).ready(function(){
//$('.smallest-image').slick({
//        speed: 1500,
//    arrows: false,
//        autoplay: true,
//        autoplaySpeed: 1500,
//      slidesToShow: 4,
//      slidesToScroll: 4,
//    dots: true,
//      responsive: [
//    {
//      breakpoint: 1024,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 3,
//        
//      }
//    },
//    {
//      breakpoint: 600,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1,
//          dots: true,
//          arrows: false,
//      }
//    }
//
//  ]
//});
//})

$(document).ready(function(){
    $('.livingSlide').slick({
      speed: 1500,
        autoplay: true,
        autoplaySpeed: 1500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
          dots: true,
          arrows: false,
      }
    }

  ]
});
    
    
})

let cart = document.getElementById("cart"),
    cartover = document.getElementById("cartover"),
    built = document.getElementById("built"),
    closers = document.getElementById("closers");
cart.onclick = function(e){
    e.preventDefault();
    cartover.style.display = "block"
}
closers.onclick = function(){
    cartover.style.display = "none"
}
























