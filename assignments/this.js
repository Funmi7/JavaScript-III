/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is the global binding which is that when in global scope, the "this" will be the window or console object.    
* 2. The second principle is the implicit binding which is whenever a function is called by a preceding dot,
     the object left of the dot gets "this".
* 3. The third principle is the new binding which is whenever a constructor function is used , 
    "this" refers to the specific instance of the object that is created and returned by the constructor function.
* 4. The fourth principle is the explicit binding which is whenever javascript's call or apply method is used "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myColor (color) {
    console.log(this);
    return color;
    }
    myColor(`Pink`);
    
    
    // Principle 2
    
    // code example for Implicit Binding
    const aboutMe = {
        favBook: 'Harry Potter',
        speak: function () {
            return console.log(`My favourite book is ${this.favBook}`);
        },
    };
    aboutMe.speak();

    
    // Principle 3
    
    // code example for New Binding
    function Book(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        console.log(`The title of the book is ${this.title}, written by ${this.author} and it is a ${this.genre} novel`);
    }

    let bookA = new Book('Harry Potter', 'J.K Rowling', 'YA Fantasy');
    let bookB = new Book('A song of ice and fire', 'G.R.R. Martin', 'Fantasy');


    // Principle 4
   
    // code example for Explicit Binding
    function music(genre, artist) {
        return console.log(`The name of the song is ${this.name}, it is a ${genre} song and sung by ${artist}`);
    }
    const name = {name: 'senorita'}
    const name2 = {name: 'perfect'}

    music.call(name, 'Pop', 'Shawn Mendes');
    music.apply(name2, ['Pop', 'Ed Sheeran']);
    // var copyOfMusic = music.bind('shawn');


    