function start() {
/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight", "The Godfather: Part II", "12 Angry Men"];

const listParagraph = document.getElementById("list-paragraph");

for (let i = 0; i < movies.length; i++) {
  listParagraph.innerHTML += `<li>${movies[i]}</li>`;
}

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songSet = new Set(["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California", "Smells Like Teen Spirit", "Imagine"]);

const setParagraph = document.getElementById("set1");

// add two more songs to the set then display in the set2 paragraph

songSet.add("Billie Jean");
songSet.add("Sweet Child O' Mine");

const setParagraph2 = document.getElementById("set2");


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const emailMap = new Map([
  ["Alice", "alice@example.com"],
  ["Bob", "bob@example.com"],
  ["Charlie", "charlie@example.com"],
  ["David", "david@example.com"],
  ["Emily", "emily@example.com"]
]);

// add two new names and emails and display in map2 use the forEach() method
emailMap.set("Frank", "frank@example.com");
emailMap.set("Grace", "grace@example.com");

const mapParagraph = document.getElementById("map2");
// get and display the email of one person, display in map3

const person = "Bob";
const email = emailMap.get(person);

const mapParagraph2 = document.getElementById("map3");




}