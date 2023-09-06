const myLibrary = [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        return(title+" by "+author+", "+pages+" pages, "+read);
    }
}

function addBookToLibrary() {

    const book = new Book()
    book.title = prompt("Please enter the title: ");
    book.author = prompt("Please enter the author: ");
    book.pages = prompt("Please enter the amount of pages: ");

    myLibrary.push(book);

  }

function displayBook(){
    //loop through array and display each book
    //display on table or on their own card
    //helps to add a few books manually in the array to see how they display
    
for(let i = (myLibrary.length-1); i >-1; i-- ){

        const books = document.createElement("div");
        const container = document.getElementById("book-container");
        container.appendChild(books);
        books.style.backgroundImage="url('istockphoto-647809752-612x612.jpg')";
        let n = 0;
        books.textContent = JSON.stringify(myLibrary[0+n]);
        n++;
}     
    
}

//add a BUTTON for adding a new book
//this will bring up a form for the user to input
//submitting a form will send to a server and cause an issue read more for details

  addBookToLibrary();
displayBook();
