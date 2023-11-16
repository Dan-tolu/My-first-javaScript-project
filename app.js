// TURNING HTML TO ARRAY

// var titles = document.getElementsByClassName('title');
// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));


// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// var wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// // console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// // console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// });



// books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//     // This is used to add an html 
//     book.textContent += " (book title)";
// });
// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2>Books and many more books...</h2>';
// // This is used to add an html 
// bookList.innerHTML += '<p> This is how you add html </p>';

// const banner = document.querySelector('#page-banner');

// console.log("#page-banner is node type is" ,banner.nodeType);
// console.log("#page-banner is node name is" ,banner.nodeName);
// console.log("#page-banner is node has child node" ,banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList = document.querySelector("#book-list");

// console.log('The parent node is' , bookList.parentNode);
// console.log('The parent node is' , bookList.parentElement.parentElement);

// console.log(bookList.children);


// const bookList = document.querySelector("#book-list");

// console.log(bookList.nextSibling);
// console.log(bookList.nextElementSibling);

// console.log(bookList.previousSibling);
// console.log(bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += "<br/> Its too bad, Im too good"

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     const li = e.target.parentElement;
//      li.parentNode.removeChild(li)


//   })
// })

// var google = document.querySelector('#book-list a');

// google.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('Cannot open', e.target.textContent, 'again' );
// })

const list = document.querySelector('#book-list ul');
// Delete books
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


// add books -list
const addForm = document.forms['add-book'];
addForm.addEventListener( 'submit', function(e){
    e.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;
    
    
    if(value == ""){
        console.log('input something')
    } 
    else{
        // create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    // add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value ;

    // adding a class
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li); 

    value = addForm.querySelector('input[type="text"]').value = "";
}
    
});


const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
       list.style.display = 'none';
    } else{
        list.style.display = 'block';
    }

});

// filter book
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
      if(title.toLocaleLowerCase().indexOf(term) != -1) {
        book.style.display = 'block';
      } else{
        book.style.display = 'none';
      }
    })
});







