let search8 = document.getElementById('search8'),
    overSearch8 = document.getElementById("over-search8"),
    overClose8 = document.getElementById("over-close8"),
    above8 = document.getElementById("above8"),
    shows8 = document.getElementById("shows8");
search8.onclick = function(e){
    e.preventDefault();
    overSearch8.style.display = 'block';
}
overClose8.onclick = function(r){
    r.preventDefault();
    overSearch8.style.display = "none"
}
above8.onmouseover = function(){
    shows8.style.opacity = 1;
    shows8.style.visibility = "visible";
}
above8.onmouseout = function(){
    shows8.style.opacity = 0;
    shows8.style.visibility = "hidden";
}
