//an array of movies not watched yet
let watchlist = ["The Good Place: The Movie", "Captain America", "Kingdom of the Planet of the Apes", "The Silicon Valley"]

//a second arrays of movies already watched
let watchedMovies = ["Matrix", "Speed", "John Wick", "Band of Brothers"]

//a function to add movies to the watchlist
function addMovie() {
    let newMovie = prompt("What movie do you want to watch?")
    console.log(newMovie)
    watchlist.unshift(newMovie)
    console.log(watchlist)
}

//a function to mark a movie as watched
function markWatched() {
    let movie = prompt("What movie did you watch?");

    let index = watchlist.indexOf(movie);

    if (index !== -1) {
        let watchedMovie = watchlist.splice(index, 1)[0];
        console.log(typeof watchedMovie)
        watchedMovies.push(watchedMovie);
        console.log(`${movie} has been added to your watched movies list`);
    } else {
        console.log(`${movie} is not in your watchlist`);
    }
}

//a function to view movies on watch list

//a function to view ALL movies (both lists)

//main menu function =)