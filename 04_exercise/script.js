function Books(author, title, price, soldOut=true) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.soldOut = soldOut;
}
var arrayOfBooks = [];
    var book1 = new Books ("stephen", "physics", 120, true);
    var book2 = new Books ("stephen henry", "chemistry", 170, true);
    var book3 = new Books ("stephen george", "science", 180, true);

arrayOfBooks.push(book1);
arrayOfBooks.push(book2);
arrayOfBooks.push(book3);

function display(){
    return arrayOfBooks.sort();
    
}
console.log(arrayOfBooks);