export class BookModel {
    bookId : number = 0;
    bookName : String = "";
    authorName : String = "";
    bookDescription : String = "";
    price : number = 0;
    quantity : number = 0;

    constructor(
        bookId : number,
        bookName : String,
        authorName : String,
        bookDescription : String,
        price : number,
        quantity : number
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.authorName = authorName;
        this.bookDescription = bookDescription;
        this.price = price;
        this.quantity = quantity;
    }
}

export class RegistrationModel {
    firstName : String = "";
    lastName : String = "";
    email : String = "";
    address : String= "";
    password : String ="";

    constructor(
    firstName : String,
    lastName : String,
    email : String,
    address : String,
    password : String
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}
 
export class LoginModel {
    email : String = "";
    password : String ="";

    constructor(
    email : String,
    password : String
    ){
        this.email = email;
        this.password = password;
    }
}

export class CartModel {
    bookId : number = 0;
    quantity : number = 0;

    constructor(
    bookId : number,
    quantity : number
    ){
        this.bookId = bookId;
        this.quantity = quantity;
    }
}