const myLibrary = [];
document.getElementById("form").style.display="none";

class Book{
  constructor(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    }
  }

Book.prototype.toggleRead= function(){
  this.read=!this.read;
}

function toggleRead(i){
  myLibrary[i].toggleRead();
  displayBook();
}

function displayBook(){
    
  document.getElementById("book-container").innerHTML="";
  for(let i = 0; i < myLibrary.length; i++ ){

        let book = myLibrary[i];
        console.log(i);
        const container = document.getElementById("book-container");
        const books = document.createElement("div");
        books.style.display="flex";
        books.style.flexDirection="column";
        books.style.alignItems="center";
        books.style.minWidth="100px";
        container.appendChild(books);
        books.style.backgroundImage="url('istockphoto-647809752-612x612.jpg')";
        books.style.backgroundSize="100% 100%";
        const bookBtn = document.createElement("div");
        books.appendChild(bookBtn);
        bookBtn.style.backgroundImage="url('4-46003_red-x-button-png-transparent-png.png')";
        bookBtn.style.backgroundSize="100% 100%";
        bookBtn.style.width="10px";
        bookBtn.style.height="15px";
        bookBtn.addEventListener('click', function(){
          console.log(i);
          myLibrary.splice(i, 1);
          displayBook();})
        const btitle = document.createElement("div");
        const bauthor = document.createElement("div");
        const bpages = document.createElement("div");
        const bread = document.createElement("button");
        bread.style.width="50px";
        bread.style.minHeight="25px";
        bread.style.backgroundColor="blue";
        bread.addEventListener('click', function(){
          toggleRead(i);
        });
        books.appendChild(btitle);
        btitle.innerHTML = `<p>${book.title}</p>`;
        btitle.style.color="yellow";
        books.appendChild(bauthor);
        bauthor.innerHTML = `<p>by ${book.author}</p>`;
        bauthor.style.color="yellow";
        books.appendChild(bpages);
        bpages.innerHTML = `<p>pages: ${book.pages}</p>`;
        bpages.style.color="yellow";
        books.appendChild(bread);
        book.read === true ? bread.innerHTML = `Read` : bread.innerHTML = `Not Read`;
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

