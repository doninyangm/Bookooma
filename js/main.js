const btn = document.querySelectorAll(".delete");

btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        div = e.target.parentElement;
        div.parentNode.removeChild(div);
    });
});