var animalFax = [
    { Name: "Giraffe", Age: 9 },
    { Name: "Piranha",  Age: 21 },
    { Name: "Gazelle",  Age: 31 },
    { Name: "Lion",  Age: 45 },
    { Name: "Leopard",  Age: 67 },
    { Name: "Ostritch",  Age: 12 },
]

function compute() {

var oldCeiling = 40;
var youngCeiling = 27;
var targetAge = 29; 
var oldNames = new Array();

    for (let i = 0; i < animalFax.length; i++) {

        if (animalFax[i].Age > targetAge)  {
        oldNames.push(animalFax[i].Name);
        }
                      
     }

     console.log(oldNames)

}

compute();

//AnimalFax.Length == Good || console.log(JSON.stringify(animalFax.length))
//console.log(JSON.stringify(animalFax[1].Name)) ALWAYS PUT THE .Identifier AFTER THE SQUARE BRACKETS 


// Misc Console Commands 
    // console.log(JSON.stringify(age)) // Returns String 
    // console.log(JSON.stringify(animalFax[1].Name))
    // console.log(JSON.stringify(animalFax[1].Age))
    // console.log(animalFax[1].Name)
    // console.log(animalFax[1].Age)
    // console.log(JSON.stringify(name))
    // console.log(name)



// if (animalFax[i].Age < oldCeiling) animalFax.Name[i] = oldName;

    // if (animalFax[4].Age > oldCeiling)  {
    //     oldName = animalFax[4].Name;
    // }
   