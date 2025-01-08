/**
 * Functions
 */
var multiply = function (x, y) {
    return x * y;
};
var divide = function (x, y) {
    return x / y;
};
function sum(x, y) {
    return (x + y);
}
var substract = function (x, y) {
    return (x - y);
};
/**
 * Arrays
 */
var favoriteShows = ["Friends", "The office", "Breaking Bad"];
var dates = [new Date(), new Date()];
var meals = [['breakfast'], ['lunch'], ['dinner']];
var office = favoriteShows[0];
var lastKnown = favoriteShows.pop();
console.log(lastKnown);
favoriteShows.map(function (show) {
    return show.concat();
});
/**
 * Tuples
 */
var tracks = {
    genre: "rock",
    exclusive: false,
    duration: 120
};
var track1 = ["rock", false, 120];
var track2 = ["hip-hop", true, 150];
var currentView = {
    title: 'dune',
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ['action', 'adeventure', 'drama']
};
var logMovie = function (movie) {
    console.log("Title:".concat(movie.title));
    console.log("Release Date:".concat(movie.date));
    console.log("Rating:".concat(movie.rating));
    console.log("Genre:".concat(movie.genre.join(',')));
};
logMovie(currentView);
