let search6 = document.getElementById('search6'),
    overSearch6 = document.getElementById("over-search6"),
    overClose6 = document.getElementById("over-close6"),
    above6 = document.getElementById("above6"),
    shows6 = document.getElementById("shows6");
search6.onclick = function(t){
    t.preventDefault();
    overSearch6.style.display = 'block';
}
overClose6.onclick = function(y){
    y.preventDefault();
    overSearch6.style.display = "none"
}
above6.onmouseover = function(){
    shows6.style.opacity = 1;
    shows6.style.visibility = "visible";
}
above6.onmouseout = function(){
    shows6.style.opacity = 0;
    shows6.style.visibility = "hidden";
}



