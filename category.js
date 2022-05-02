var search2 = document.getElementById('search2');
 var   overSearch2 = document.getElementById("over-search2");
 var   overClose2 = document.getElementById("over-close2");
 var   above2 = document.getElementById("above2");
 var   shows2 = document.getElementById("shows2");
search2.onclick = function(e){
    e.preventDefault();
    overSearch2.style.display = 'block';
}
overClose2.onclick = function(r){
    r.preventDefault();
    overSearch2.style.display = "none"
}
above2.onmouseover = function(){
    shows2.style.opacity = 1;
    shows2.style.visibility = "visible";
}
above2.onmouseout = function(){
    shows2.style.opacity = 0;
    shows2.style.visibility = "hidden";
}
