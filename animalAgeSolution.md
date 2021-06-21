# Coding Challenge Tutorial: Sort Animals By Age 

In this tutorial, we will be writing a simple JavaScript program to sort objects by their integer values. Be warned, this tutorial is extremely detailed, but following these steps will ensure your success in completing this challenge. 

# Introduction:

When looking for a job as a software developer, you will almost certainly be required to complete some sort of coding challenge at some point in the inteview process. The challenge we will be solving today involves sorting animals by their ages and returning the lowest age over a certain value. For the purpose of this tutorial, we will be reviewing...

1. Object Creation: We will begin by defining an array of objects. If you are given this coding challenge during an interview, you must be prepared to create this array with correct object syntax and relevant properties off the top of your head. 

2. For Loops: We will be using a for loop to iterate over the array to sort the objects (animals) by age. Again, you should know the syntax and implementation of a for-loop on command. 

3. If-Statement: We will be using if-statements to determine whether the animal will be added to the list of animals over the given age. 

4. Push Function: We will be using a push function to add items identified by the if-statement to the above-array.   

5. Sort Statements: We will need a sort statement to sort the above-age array by age from youngest to oldest. Knowing this sort statement by heart will save you a lot of time in completing this challenge, it can also be applied to future use cases. 

Lets get started! The challenge is defined below. 

# Coding Challenge: Animal Ages 

Create a list of animals containing their names and ages. Write a program that will return the name of the animal with the LOWEST age OVER 29.

Expected output: Lion

# Step 1: Define your array of objects. 

We will start by defining our array of animals. It is likely that your interviewer will expect you to create this array yourself; make sure you know the syntax for defining an object-based array by heart and can create it quickly, it will save valuable time.

For the purposes of object-oriented programming (setting it up this way will increase functionality and make your app flow more logically), make sure that you define each array member as an object; this is done by utilizing { key: key-value, key: key-value }, syntax. For the purpose of this program, we will be sorting animal objects by their age; remember to set this key value as an integer in each object. An example array is shown below, using "const" to define the object is recommended over "var". 

``` javascript 

const animalFax = [
    { Name: "Giraffe", Age: 9 },
    { Name: "Komodo Dragon",  Age: 4 },
    { Name: "Piranha",  Age: 21 },
    { Name: "Gazelle",  Age: 45 },
    { Name: "Lion",  Age: 31 },
    { Name: "Leopard",  Age: 67 },
    { Name: "Ostritch",  Age: 12 },
    { Name: "Hyena",  Age: 54 }
]; // defines the animals name and age as objects within an array


```  

Your interviewer will most likely expect you to know the difference between "let" and "const", be sure you are able to explain these differences and the correct usage of the two.

Additionally, it will be useful to know the expected output of the array before you begin coding. In our case, it is "Lion". 

# Step 2: Define your main function and your relevant variables.

Define your function, add variables (use *let* within functions if possible) and call the function at the bottom of your program. 

``` javascript 

function compute {

let targetAge = 29; 
let oldAnimals = new Array(); // Empty Array to be filled. In a production setting, you could also use oldAnimals = [] 
let youngestOld = ''; // Is assigned the object at oldAnimals[0].Name;
    ..... 
} 

compute (); 
//End Program 

``` 
# Step 3: Intialize your for-loop.

Add a for-loop to your function. This will be the basis for our program, it will be used to iterate over our *animalFax* object and add any animals over our target age to a new array by way of an if-statement and push function. 

This loop will iterate over the objects in our *animals* array based on the number of objects in the array itelf. We will identify this value by using the below parameter.

``` javascript 

i < animals.length;

```

Be sure to use "let" to define your starting value in this loop! 

``` javascript 

function compute {

let targetAge = 29; 
let oldAnimals = new Array(); // Empty Array to be filled. In a production setting, you could also use oldAnimals = [] 
let youngestOld = ''; // Is assigned the object at oldAnimals[0].Name;
   
    for (let i = 0; i < animals.length; i++) {
        .."If-statement goes here."...
    }
}

compute (); 
//End Program 

``` 
# Step 4: Add your if-statement and add "push-results" function.

We will use an if-statement to find the *amimalFax* objects with ages over 29; if so, they're added to the *oldAnimals* array. Be sure to push the *animalFax* objects to *oldAnimals* in object format, see below. 

``` javascript 

if (animalFax[i].Age > targetAge)  {
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})
        }; // If the animals Age is ove

```


Function compute() so far

``` javascript 

function compute {

let targetAge = 29; 
let oldAnimals = new Array(); // Empty Array to be filled. In a production setting, you could also use oldAnimals = [] 
let youngestOld = ''; // Is assigned the object at oldAnimals[0].Name;
   
    for (let i = 0; i < animals.length; i++) {
          if (animalFax[i].Age > targetAge)  {
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})
        }; // If the animals Age is over 29, their name and age are added to the oldAnimals array as an object 
    }
}

compute (); 
//End Program 

``` 

# Step 7: Sort the oldAnimals array from min-max

Sorting Algorithm (Min-Max): 

``` javascript 

array.sort((a, b) => (a.key > b.key) ? 1 : -1);

```

We will use this to order the *oldAnimals* objects from smallest to largest, shown below. 

``` javascript 

function compute {

let targetAge = 29; 
let oldAnimals = new Array(); // Empty Array to be filled. In a production setting, you could also use oldAnimals = [] 
let youngestOld = ''; // Is assigned the object at oldAnimals[0].Name;
   
    for (let i = 0; i < animals.length; i++) {
          if (animalFax[i].Age > targetAge)  {
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})
        }; // If the animals Age is over 29, their name and age are added to the oldAnimals array as an object 
    }

    oldAnimals.sort((a, b) => (a.Age > b.Age) ? 1 : -1); // Sorts the animal objects in the oldAnimals array by Age
}

compute (); 
//End Program 

``` 
Try to commit this algorithm to memory, it can be used in a variety of coding challenges. 


# Step 8: Assign the first object in the oldAnimals array to the youngestOld variable and console log the result. 

We will assign the oldAnimals[0].Name object to the youngestOld variable, this value is our answer.

``` javascript 

youngestOld = oldAnimals[0].Name;

```
Lastly, we pass this value into console.log()

``` javascript 

console.log(youngestOld); // Outputs youngestOld value to console. Expected output: Lion

```

The completed function is shown below. 

``` javascript 

function compute {

let targetAge = 29; 
let oldAnimals = new Array(); // Empty Array to be filled. In a production setting, you could also use oldAnimals = [] 
let youngestOld = ''; // Is assigned the object at oldAnimals[0].Name;
   
    for (let i = 0; i < animals.length; i++) {
          if (animalFax[i].Age > targetAge)  {
        oldAnimals.push({Name: animalFax[i].Name, Age: animalFax[i].Age})
        }; // If the animals Age is over 29, their name and age are added to the oldAnimals array as an object 
    }

    oldAnimals.sort((a, b) => (a.Age > b.Age) ? 1 : -1); // Sorts the animal objects in the oldAnimals array by Age
    youngestOld = oldAnimals[0].Name; // Assigns the Name of the first member of the sorted oldAnimals array to 
                                     // the youngestOld variable
    
    //  console.log(oldAnimals[0].Name) // Expected output: Lion 
    console.log(youngestOld); // Outputs youngestOld value to console. Expected output: Lion
};
}

compute (); 
//End Program 

``` 

With that, we are done! Run your code in an online editor, Visual Studio Code or another console-based environment to find the result. If successful, the console should output "Lion". You can find the complete JS code on GitHub via the link below. 

Page on GitHub: https://github.com/ianedwards-jpg/Object_Oriented_Prog_JavaScript/blob/main/animalAgeSolution.js
