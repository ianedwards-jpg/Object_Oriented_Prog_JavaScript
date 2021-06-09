var animalFax = [
    { Name: "Giraffe", Age: 9 },
    { Name: "Piranha",  Age: 21 },
    { Name: "Gazelle",  Age: 31 },
    { Name: "Lion",  Age: 45 },
    { Name: "Leopard",  Age: 67 },
    { Name: "Ostritch",  Age: 12 },
]

function compute() {

var targetAge = 29; 
var youngestOld = '';
var oldAnimals = new Array();

    for (let i = 0; i < animalFax.length; i++) {

        if (animalFax[i].Age > targetAge)  {
       
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})

        }
                      
     }

    //  console.log(JSON.stringify(oldAnimals[1]))
     console.log((oldAnimals[1].Age))
    //  console.log((oldAnimals))

}

compute();
//End Program 

////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Misc Variables 
    // var oldCeiling = 40;
    // var youngCeiling = 27;