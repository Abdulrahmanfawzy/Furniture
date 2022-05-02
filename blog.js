let search4 = document.getElementById('search4'),
    overSearch4 = document.getElementById("over-search4"),
    overClose4 = document.getElementById("over-close4"),
    above4 = document.getElementById("above4"),
    shows4 = document.getElementById("shows4");
search4.onclick = function(t){
    t.preventDefault();
    overSearch4.style.display = 'block';
}
overClose4.onclick = function(y){
    y.preventDefault();
    overSearch4.style.display = "none"
}
above4.onmouseover = function(){
    shows4.style.opacity = 1;
    shows4.style.visibility = "visible";
}
above4.onmouseout = function(){
    shows4.style.opacity = 0;
    shows4.style.visibility = "hidden";
}

