//* ===================Easy Going ==================
// a for loop that logs the numbers from 1 to 20
for (let i = 0; i <= 20; i++) {
    console.log(i)
}
//* =================== Get Even ===================
// a for loop that logs even numbers from 0 to 200
for(let i = 0; i < 200; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}
//* ===================== Fizz Buzz ================
// A foor loop that logs Fizz Buzz and Fizzbuzz
// for divisibles of 3 and 5

for(let i = 0; i < 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) { 
        console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
        console.log('Your number is not Fizz, buzz, nor Fizzbuzz')
    }
  	
}

// * =================================== Wil Wild Life ==============================
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2,3, 5001) //plantee age updated by 1 after birthday
wolfy.splice(3, 1, 'Gotham City') //update Yukon to Gotham city
dart.push('Hawkins')// new hometown added
wolfy.splice(0, 1, 'Gameboy') // Wolfy renamed to Gameboy

//* ================================ Yell at the Ninja Turtles ===========================
const NinjaTurtles = ['Donatello', 'Leonordo', 'Raphael', 'Michaelangelo']
for (turtle of NinjaTurtles) {
    console.log(turtle.toUpperCase())
}

//* ======================================= Methods, Revisited ===================
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
favMovies.forEach((movie, i) => {
    if (movie === 'Titanic'){
      console.log(i) // this logs the index of "Titantic"
    }
  })
favMovies.sort(); // this alters the array after operation.
favMovies.pop(); // The last element is gone.
favMovies.push("Guardians of the Galaxy"); // This inserts an element at the end.
favMovies.reverse() // This changes elements order, first element will be last and vise-versa.
favMovies.shift() // This removes the first element.
favMovies.unshift() // This add new elements at the begining.

const halfOfFavMovies = favMovies.slice(9)//This doesn't alter the array, it makes a copy of a section of it.
//* After slice operation the array is devided into 2 
//* and the second portion is stored in halfOfFavMovies
//* this operation didn't affect the original array.

console.log(halfOfFavMovies[4]) // This logs 'Fast and Furious'
//* We get undefined when we try to read and element in a empty index in an array
//* declaring a variable with const and let is sligthly different from declaring an array
//* with const. Though an Array is declared with 'const' we can still 
//* store, remove, or manipulate it. Array is like a container to hold data.



//* ================================== Where is Waldo =========================
const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
];
whereIsWaldo.splice(1,1) // removes eggbert
whereIsWaldo[1].splice(2, 1, 'No one') // updates 'neff' to 'No One' based on the current state
console.log(whereIsWaldo[2][1][1]) //Logs 'Waldo'

//* ========================== Excited Kitten ==================================

for(let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")

    if (i % 2 === 0) {
        const logText = [
            "...human...why you taking pictures of me?...", 
            "...the catnip made me do it...", 
            "...why does the red dot always get away..."
        ]
        const logTextIndex = Math.floor(Math.random() * logText.length) // This generates a random array index

        console.log(`${logText[logTextIndex]}`)
    }
}

//* ==================================== Find the median Number ==========================

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// this devide the array into 2 and rounds it
const mid = Math.floor(nums.length /2) 

// sort the nums array 
const sortedNums = nums.sort((a, b) => a - b)

// Pass the rounded value as index to the sorted nums array to get the median
const medianNumber = sortedNums[mid] 

// logs the median number
console.log(`The median number is ${medianNumber}`)

//* =================================== Hungry more =====================================

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];

// Alien Attire

// save the left shoe into the kristynsShoe variable
const kristynsShoe = kristynsCloset[0]

// remove left shoe from kristynsCloset
const updatedKristynsCloset = kristynsCloset.splice(1, 6)

// save the left shoe into Thom's accessories array
thomsCloset[2].push(kristynsShoe)

// Dress Us Up

const hat = updatedKristynsCloset[4]
const hoodie = updatedKristynsCloset[2]
const pant = updatedKristynsCloset[3]
const boot = updatedKristynsCloset[0]

const shirt = thomsCloset[0][0]
const pant1 = thomsCloset[1][0]
const scarf = thomsCloset[2][1]

const shirt1 = thomsCloset[0][2]
const pant2 = thomsCloset[1][1]
const glasses = thomsCloset[2][2]

const kristynaOutfit = `Kristyna will be wearing ${hat} with ${hoodie} and ${pant} with ${boot}.`
const thomOutfit1 = `Thom will be wearing ${shirt} on ${pant1} and ${scarf} as accessory.`
const thomOutfit2 = `For nicer weather Thom will be wearing ${shirt1} on ${pant2} with ${glasses} glasses on.`

const message = [kristynaOutfit, thomOutfit1, thomOutfit2]

const msgIndex = Math.floor(Math.random() * message.length)
console.log(message[msgIndex])

// Dirty Laundry

for (let i = 0; i < updatedKristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${updatedKristynsCloset[i]}`)
}

// Inventory

//Thom wants to do inventory on his closet. 
//Using bracket notation, 
//log the arrays containing all of 
//Thom's shirts, pants, and accessories.

const thomSShirt1 = thomsCloset[0][0]
const thomSShirt2 = thomsCloset[0][1]
const thomSShirt3 = thomsCloset[0][2]
const thomSShirt4 = thomsCloset[0][3]

const thomsPant1 = thomsCloset[1][0]
const thomsPant2 = thomsCloset[1][1]
const thomsPant3 = thomsCloset[1][2]

const acc1 = thomsCloset[2][0]
const acc2 = thomsCloset[2][1]
const acc3 = thomsCloset[2][2]

console.log(thomSShirt1)
console.log(thomSShirt2)
console.log(thomSShirt3)
console.log(thomSShirt4)

console.log(thomsPant1)
console.log(thomsPant2)
console.log(thomsPant3)

console.log(acc1)
console.log(acc2)
console.log(acc3)

console.log(acc1)