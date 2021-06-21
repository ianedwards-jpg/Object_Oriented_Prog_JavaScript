# Coding Challenge Tutorial: Animal Age Sort

In this tutorial, we will be writing a simple JavaScript program to sort objects by their integer values. Be warned, this tutorial is extremely detailed, but following these steps will ensure your success in completing this challenge. 

# Introduction:

When looking for a job as a software developer, you will almost certainly be required to complete some sort of coding challenge at some point in the inteview process. The challenge we will be solving today involves sorting animals by their ages and returning the lowest age over a certain value. For the purpose of this tutorial, we will be reviewing...

1. Object Creation: We will begin with an array in object form. If you are given this coding challenge during an interview, you must be prepared to create this object from scratch off the top of your head. 

2. For Loops: We will be using a for loop to iterate over the array to sort the objects (animals) by age. Again, you should know the syntax and implementation of a for-loop on command. 

3. If-Statement: We will be using if-statements to determine whether the animal will be added to the list of animals over the given age. 

4. Push Function: We will be using a push function to add items identified by the if-statement to the above-array.   

5. Sort Statements: We will need a sort statement to sort the above-age array by age from youngest to oldest. Knowing this statement by heart will save you a ton of time in completing this challenge, it is also just very useful to know. 

Lets get started! The challenge is defined below. 

# Coding Challenge: Animal Ages 

Create a list of animals containing their names and ages 
Write a program that will return the name of the animal with the LOWEST age OVER 29.

Expected output: Lion

# Step 1: Define your array of objects. 

We will start by defining our array of animals. It is likely that your interviewer will expect you to create this array yourself, make sure you know the syntax for defining an array by heart and can create it quickly, it will save you precious time.

For the purposes of object-oriented programming (setting it up this way will increase functionality and make your app flow more logically), make sure that you define each array member as an object; this is done by utilizing { key: key-value, key: key-value } syntax. An example array is shown below, using "const" to define the object is recommended over "var". 

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

Your interviewer will likely expect you to know the difference between "let" and "const", be sure you are able to explain these differences and the correct usage of the two. 

Additionally, it will be useful to know the expected output of the array, 

# Step 2: Define your main function.

Define your function and call the function at the bottom of your program. 

``` javascript 

function compute {
    ..... 
}

compute (); 
//End Program 

``` 
# Step 3: Intialize your for-loop.

Add a for-loop to your function. This will be the basis for our program, it will be used to iterate over our *animals* object and add any animals over our target age to a new array by way of an if-statement and push function. 

This loop will iterate over the objects in our array based on 

Be sure to use "let" to define your starting value in this loop! 

``` javascript 

function compute {
    for (let i = 0; i < animals.length; i++) {
        .....
    }
}

compute (); 
//End Program 

``` 
