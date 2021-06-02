// Practice: Dog Years
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)

// Practice: Best in Show
const stringOfDog = (typeOfDog) => {
    if (typeOfDog === "meow"){
        return "I like cats"
    }
    
    const myFavStatement = `my favorite dog breed is ${typeOfDog}!`

    return myFavStatement
}

const FavDogFunction = stringOfDog("golden")

// console.log(`"When it comes to pets, ${FavDogFunction}`)

// Practice: Addition
const add = (numberFirst, numberSecond, numberThird) => {
const addSolution = numberSecond + numberThird + numberFirst
    return addSolution
}

itsAddition = add(17, 4,11)
// console.log(itsAddition)


// Practice: Self Driving Cars
const go = (direction, speed) => {
    const speedDemon = `The car is moving ${direction} at ${speed} mph.`

    if (speed > 75){
        return `The car is moving ${direction} at ${speed} mph. SLOW DOWN`
    }
    
    return speedDemon
}

const copRadar = go("backwards", 20)
// console.log(copRadar)

// Practice: Odds or evens
const evenOrOdd = (numberFirst) =>{
    if (numberFirst % 2 !== 0){
        return "Odd"
    }
    
    return "Even"
}
const whoEven = evenOrOdd(4)
// console.log(whoEven)

// Practice: Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)

    startsWith(searchString, position)
 */

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)

    const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


// console.log()



// Practice: You can tune a piano

// Sven the Norwegian fisherman goes out at 5:32 AM every day to fish for tuna in 
// the North Sea. Each time he casts his line, he has a 33% chance of catching a tuna.

// On a side note, did you know that you can ask JavaScript for a random number? 
// You use the Math.random() method which, by default, returns a number between 0 and 1.
//  If you mutiply the result by 2, you will get a number between 0 and 2. 
//  This would allow you to simulate a coin flip. 
//  You could check if the value was between 0 and 1 (heads), 
//  or between 1 and 2 (tails).

// Math.random() * 2  // Number between 0 and 2
// Write a function that simulates Sven's chances of catching a tuna. 
// The function needs no input, and it simply returns true or false. 
// If a random number falls in a certain range, return true. 
// If it falls in any other range, return false.

// Practice: Fast Food


// Practice: Same Chores, Different Days
