// Coding Challenge: Animal Ages 

//Create a list of animals containing their names and ages 
// Write a program that will return the name of the animal with the LOWEST  age OVER 29
// Expected output: Lion 
//This program will take an unordered list, sort by Age, and output the name of the animal with the
//lowest age over 29

const animalFax = [
    { Name: "Giraffe", Age: 9 },
    { Name: "Piranha",  Age: 21 },
    { Name: "Gazelle",  Age: 45 },
    { Name: "Lion",  Age: 31 },
    { Name: "Leopard",  Age: 67 },
    { Name: "Ostritch",  Age: 12 },
] // defines the animals name and age as objects within an array 

function compute() {

let targetAge = 29; 
let youngestOld = ''; //Empty Array to be filled
let oldAnimals = new Array();// In a production setting, you could also use oldAnimals = [] 

    for (let i = 0; i < animalFax.length; i++) {

        if (animalFax[i].Age > targetAge)  {
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})
        }// If the animals Age is over 29, their name and age are added to the oldAnimals array as an object 

        // console.log(animalFax[i].Name) Returns all Names in animalFax array 
        // console.log(animalFax[i].Age)  Returns all ages in animalFax array 
     }
     
    oldAnimals.sort((a, b) => (a.Age > b.Age) ? 1 : -1) // Sorts the animal objects in the oldAnimals array by Age
    youngestOld = oldAnimals[0].Name; // Assigns the Name of the first member of the sorted oldAnimals array to the youngestOld variable
    
    //  console.log(oldAnimals[0].Name)
     console.log(youngestOld)
}

compute();

//End Program 

/////////////////////////////////////////FootNotes///////////////////////////////////////////////////////////////

//Notes
//console.log(JSON.stringify(animalFax[1].Name)) ALWAYS PUT THE .Identifier AFTER THE SQUARE BRACKETS 

//Tests 
//AnimalFax.Length == Good || console.log(JSON.stringify(animalFax.length))

//Attempted Push Statements 
    // oldAnimals.push(animalFax[i].Name + animalFax[i].Age);
    // oldAnimals.push(animalFax[i].Name)
    // oldAnimals.push(animalFax[i].Age);
    // oldAnimals.push( {Name: animalFax[i].Name} + {Age: animalFax[i].Age});
    // oldAnimals.push( "Name:" + animalFax[i].Name + "Age:" + animalFax[i].Age);
    // oldAnimals.push(animalFax[i].Age);

//Attempted If Statements 
    // if (animalFax[i].Age < oldCeiling) animalFax.Name[i] = oldAnimals;

    // if (animalFax[4].Age > oldCeiling)  {
    //     oldAnimals = animalFax[4].Name;
    // }

// Misc Console Commands 
    // console.log(JSON.stringify(age)) // Returns String 
    // console.log(JSON.stringify(animalFax[1].Name))
    // console.log(JSON.stringify(animalFax[1].Age))
    // console.log(animalFax[1].Name)
    // console.log(animalFax[1].Age)
    // console.log(JSON.stringify(name))
    // console.log(name)
    //  console.log(JSON.stringify(oldAnimals[1]))
    //  console.log(oldAnimals[0].Age)
    //  console.log((oldAnimals)) //Returns array of all old animals 
    //  console.log((oldAnimals[0].Name))
    // console.log(Math.min(oldAnimals.length))
    // console.log(Math.min.apply(null, oldAnimals.Age))


// Misc Variables 
    // var oldCeiling = 40;
    // var youngCeiling = 27;

//Tested for loops 

 //  for (let i = 0; i < oldAnimals.length; i++) {

    //         // console.log(Math.min(...oldAnimals[i].Age))
    //         // console.log(oldAnimals[i].Age)
    //         oldAnimals.sort((a, b) => (a.Age > b.Age) ? 1 : -1)

    //         // console.log(oldAnimals[i])
    //         // console.log(oldAnimals[0].Age)
                                
    //  }