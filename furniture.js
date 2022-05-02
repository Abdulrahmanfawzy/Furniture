function myNav(){
    var navigation = document.getElementById("nav");
    if(navigation.style.left == "0%"){
        navigation.style.left = "-100%"
    }else{
        navigation.style.left = "0%"
    }
}


function myWindow(){
    var w = document.body.scrollTop,
        head = document.getElementById("header");
    window.addEventListener("scroll", function(){
        if(w >= 60 || document.documentElement.scrollTop >= 60){
        head.classList.add("actives");
        }else{
            head.classList.remove("actives");
        }
        
        var tops = document.querySelectorAll(".top");
        for(var i = 0; i < tops.length; i++){
            var v = document.documentElement.scrollTop;
            if(v > 120){
                tops[i].style.display = "block"
            }else{
                tops[i].style.display = "none"
            }
        }
    })
    
    
    
}
myWindow();

function myUppers(){
    var topps = document.querySelectorAll(".top");
    for(var i = 0; i < topps.length; i++){
        topps[i].addEventListener("click",function(){
            scrollTo(0,0)
        })
    }
    
}
myUppers()
$(document).ready(function(){
    $('.chairs').slick({
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        }
      ]
    });

})  

let overs = document.getElementsByClassName("overly");
    
function myFun(x){
    for(var i = 0; i < overs.length; i++){
        overs[i].style.display = "none";
    }
    document.getElementById(x).style.display = "block";
}

let passer = document.getElementsByClassName("close"),
    shower = document.getElementsByClassName("show-image");
function closer(){
    for(var i = 0; i < overs.length; i++){
        overs[i].style.display = "none"
    }
    
}
let imageRight = document.getElementsByClassName("image-right"),
    borders = document.getElementsByClassName("borders");



function myFunction(z,y){
    for(var i = 0; i < imageRight.length; i++){
        imageRight[i].style.transform = "translateX(100%)";
        imageRight[i].style.visibility = "hidden";
        
    }
    for(var i = 0; i < borders.length; i++){
        borders[i].classList.remove("mover")
    }

    document.getElementById(z).style.transform = "translateX(0%)";
    document.getElementById(z).style.visibility = "visible";
    y.currentTarget.className += " mover"
}



let search = document.getElementById('search'),
    overSearch = document.getElementById("over-search"),
    overClose = document.getElementById("over-close"),
    above = document.getElementById("above"),
    shows = document.getElementById("shows");
search.onclick = function(e){
    e.preventDefault();
    overSearch.style.display = 'block';
}
overClose.onclick = function(r){
    r.preventDefault();
    overSearch.style.display = "none"
}
above.onmouseover = function(){
    shows.style.opacity = 1;
    shows.style.visibility = "visible";
}
above.onmouseout = function(){
    shows.style.opacity = 0;
    shows.style.visibility = "hidden";
}


let item = document.getElementsByClassName("item");
function myItem(w){
    for(var i = 0; i < item.length; i++){
        item[i].classList.remove("changers")
    }
    w.currentTarget.classList.add("changers")
}


























