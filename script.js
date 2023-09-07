const myLibrary = [];
document.getElementById("form").style.display="none";


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    }

function displayBook(){
    //loop through array and display each book
    //display on table or on their own card
    //helps to add a few books manually in the array to see how they display
  document.getElementById("book-container").innerHTML="";
  for(let i = (myLibrary.length-1); i >-1; i-- ){

        let book = myLibrary[i];
        const container = document.getElementById("book-container");

        const books = document.createElement("div");
        container.appendChild(books);
        books.style.backgroundImage="url('istockphoto-647809752-612x612.jpg')";
        const btitle = document.createElement("div");
        const bauthor = document.createElement("div");
        const bpages = document.createElement("div");
        const bread = document.createElement("div");
        books.appendChild(btitle);
        btitle.innerHTML = `<p>${book.title}</p>`;
        books.appendChild(bauthor);
        bauthor.innerHTML = `<p>${book.author}</p>`;
        books.appendChild(bpages);
        bpages.innerHTML = `<p>${book.pages}</p>`;
        books.appendChild(bread);
        bread.innerHTML = `<p>${book.read}</p>`;
}}

function addBookToLibrary() {

   let title = document.getElementById('title').value
   let author = document.getElementById('author').value
   let pages = document.getElementById('pages').value
   let read = document.getElementById('read').checked
   const book = new Book(title,author,pages,read)
  myLibrary.push(book);
  displayBook();
   }

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary();})
 
function asd(a)
{
    if(a==1)
        document.getElementById("form").style.display="block";
}

