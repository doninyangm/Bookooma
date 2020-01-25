const list = document.querySelector(".list");

list.addEventListener('click', function(e){
    console.log(e.target.className);
    if(e.target.className == "delete"){
        div = e.target.parentElement;
        list.removeChild(div);
    }
});

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const item = document.createElement('div');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('button');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //style the elemenst
    item.classList.add('item'); // style.class = "item";
    bookName.classList.add('title'); //.style.class = "title";
    deleteBtn.classList.add('delete'); //style.class = "delete";

    //append to document
    item.appendChild(bookName);
    item.appendChild(deleteBtn);
    list.appendChild(item);

    //clear values
    addForm.querySelector('input[type="text"]').value = "";
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.querySelectorAll('.item');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none';
        }
    });
});

// const btn = document.querySelectorAll(".delete");

// btn.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         div = e.target.parentElement;
//         div.parentNode.removeChild(div);
//     });
// });