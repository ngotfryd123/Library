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
  for(let i = 0; i < myLibrary.length; i++ ){

        let book = myLibrary[i];
        const container = document.getElementById("book-container");

        const books = document.createElement("div");
        container.appendChild(books);
        books.style.backgroundImage="url('istockphoto-647809752-612x612.jpg')";
        books.style.backgroundSize="100% 100%";
        const bookBtn = document.createElement("button");
        books.appendChild(bookBtn);
        bookBtn.style.backgroundImage="url('4-46003_red-x-button-png-transparent-png.png')";
        bookBtn.style.backgroundSize="100% 100%";
        bookBtn.style.width="10px";
        bookBtn.style.height="15px";
        bookBtn.addEventListener('click', function(i){
          myLibrary.splice(i, 1);
          displayBook();})
        const btitle = document.createElement("div");
        const bauthor = document.createElement("div");
        const bpages = document.createElement("div");
        const bread = document.createElement("div");
        books.appendChild(btitle);
        btitle.innerHTML = `<p>${book.title}</p>`;
        btitle.style.color="yellow";
        books.appendChild(bauthor);
        bauthor.innerHTML = `<p>${book.author}</p>`;
        bauthor.style.color="yellow";
        books.appendChild(bpages);
        bpages.innerHTML = `<p>${book.pages}</p>`;
        bpages.style.color="yellow";
        books.appendChild(bread);
        bread.innerHTML = `<p>${book.read}</p>`;
        bread.style.color="yellow";

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

