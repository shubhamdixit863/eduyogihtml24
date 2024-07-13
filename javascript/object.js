// Different ways of creating objects in javascript

// first way is using constructor function 

function Human(name){
    this.name=name;
 
 }
 
 const h=new Human("stuti");
 console.log(h);
 
 
 // 2 is using a class
 
 class Student {
   constructor(name){
     this.nam=name;
     
   }
 
   printName(){
     console.log("hii there")
   }
 }
 
 const st=new Student("divya");
 console.log(st);
 st.printName();
 
 
 // 
 
 /**
  *
  *
  * You need to create a library system that manages books. Implement the following classes:
 
     1.	Book: Represents a book.
     •	Properties:
     •	title: The title of the book (string).
     •	author: The author of the book (string).
     •	isbn: The ISBN number of the book (string).
     •	isAvailable: A boolean indicating if the book is available for borrowing (default is true).
     •	Methods:
     •	borrow(): Sets isAvailable to false.
     •	return(): Sets isAvailable to true.
     2.	Library: Represents a library.
     •	Properties:
     •	books: An array of Book objects.
     •	Methods:
     •	addBook(book): Adds a book to the library.
     •	removeBook(isbn): Removes a book from the library by its ISBN.
     •	findBookByTitle(title): Returns the book object with the given title.
     •	findBookByAuthor(author): Returns an array of books by the given author.
     •	borrowBook(isbn): Borrows a book from the library by its ISBN (sets isAvailable to false if the book is available).
     •	returnBook(isbn): Returns a book to the library by its ISBN (sets isAvailable to true).
  */


     class Book {
        constructor(title, author, isbn) {
          this.title = title;
          this.author = author;
          this.isbn = isbn;
          this.isAvailable = true;
        }
      
        borrow() {
          if (this.isAvailable) {
            this.isAvailable = false;
            return true;
          } else {
            return false;
          }
        }
      
        return() {
          this.isAvailable = true;
        }
      }
      
      class Library {
        constructor() {
          this.books = [];
        }
      
        addBook(book) {
          this.books.push(book);
        }
      
      }
      
      const book=new Book("harry potter","jennifer","90900");
      
      const lib=new Library();
      lib.addBook(book);