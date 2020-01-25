const list = document.querySelector(".list");

list.addEventListener('click', function(e){
    console.log(e.target.className);
    if(e.target.className == "delete"){
        div = e.target.parentElement;
        list.removeChild(div);
    }
});

// const btn = document.querySelectorAll(".delete");

// btn.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         div = e.target.parentElement;
//         div.parentNode.removeChild(div);
//     });
// });