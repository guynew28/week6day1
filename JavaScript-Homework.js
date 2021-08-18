//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



function findWords(dog_string1,dog_names1){
    for (let i=0; i<=dog_names1.length-1; i++){
        if ( dog_string1.search( dog_names1[i]) > 0 ){
            console.log("Matched dog_name")    
        } else{
            console.log("No Matches")
            
        }
    
    }
}

console.log(findWords(dog_string,dog_names))




//Call method here with parameters



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */



arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i=0; i<arr.length; i++){
        if (i%2==0){
            arr.splice(i,1,"even index")
        }
    }
    return arr
}

console.log(replaceEvens())



//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//=============Exercise #3===========//
/*
Very simple, given a number, find its opposite.
def opposite(number):
  # your solution here
    return number-(2*number)
//     */

let opposite = function(num) {
    return (num-(2*num))
}
console.log(opposite(5));



//=============Exercise #4===========//
/*
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
*/

let apple = function(x){
    if (x**2>1000){
        return "It's hotter than the sun!!"
    }
    else {
        return "Help yourself to a honeycomb Yorkie for the glovebox."
    }
}
console.log(apple())
