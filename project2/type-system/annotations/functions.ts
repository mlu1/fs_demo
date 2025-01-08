/**
 * Functions
 */

const multiply = (x:number,y:number):number=>{
    return x*y;
}

const divide = (x:number,y:number):number=>{
    return x/y;
}

function sum(x:number,y:number){
    return (x+y)
}

const substract  = function(x:number,y:number):number{
    return (x-y)
};

/**
 * Arrays
 */
const favoriteShows:string[] =["Friends","The office","Breaking Bad"];
const dates = [new Date(),new Date()]
const meals:string[][] = [['breakfast'],['lunch'],['dinner']]

let office = favoriteShows[0]
let lastKnown = favoriteShows.pop()
console.log(lastKnown)

favoriteShows.map((show:string):string=>{
    return show.concat()
})

/**
 * Tuples
 */
const tracks={
    genre:"rock",
    exclusive:false,
    duration:120
}

type Track = [string,boolean,number]
const track1:Track = ["rock",false,120]
const track2:Track = ["hip-hop",true,150]

const currentView = {
    title:'dune',
    date:new Date(2021,9,24),
    rating:8.2,
    genre:['action','adeventure','drama']
};

const logMovie = (movie:{
        title:string;
        date:Date;
        rating:number;
        genre:string[];
    }) =>{
        console.log(`Title:${movie.title}`)
        console.log(`Release Date:${movie.date}`)
        console.log(`Rating:${movie.rating}`)
        console.log(`Genre:${movie.genre.join(',')}`)
    }


logMovie(currentView)