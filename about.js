let search7 = document.getElementById('search7'),
    overSearch7 = document.getElementById("over-search7"),
    overClose7 = document.getElementById("over-close7"),
    above7 = document.getElementById("above7"),
    shows7 = document.getElementById("shows7");
search7.onclick = function(t){
    t.preventDefault();
    overSearch7.style.display = 'block';
}
overClose7.onclick = function(y){
    y.preventDefault();
    overSearch7.style.display = "none"
}
above7.onmouseover = function(){
    shows7.style.opacity = 1;
    shows7.style.visibility = "visible";
}
above7.onmouseout = function(){
    shows7.style.opacity = 0;
    shows7.style.visibility = "hidden";
}
