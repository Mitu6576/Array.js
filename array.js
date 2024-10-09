// problem-1(manage a to do list)



let todoList =[ 'Do Laundry','Pay bills','walk the dog' ];

//Step - 1: Add the task "Buy groceries" to the end of the list.

todoList.push( 'Buy groceries' );

console.log( todoList );

//Step - 2: Add the task "Clean room" to the beginning of the list.

todoList.unshift( 'clean room' );
 
console.log( todoList );

//Step - 3: Remove the last task from the list and store it in a variable.

todoList.pop();

console.log( todoList );

let name1 = 'Buy groceries';
console.log( name1 );

//Step - 4: Find the index of "Clean room" and remove it from the list.

todoList.indexOf( 'clean room' );

console.log( todoList.indexOf( 'clean room' ) );

todoList.shift();

console.log( todoList );

//Step - 5: Print the current length of the list and log the remaining tasks.

todoList.length

console.log( todoList.length );


// problem-2 ( Guest List )

let guests =[ 'Alice', 'Bob' ];

//Step - 1: Add three guests to the list using push().

guests.push( 'Jack','David','Juli' );

console.log( guests );

//Step - 2: The first guest decides not to come. Remove them using shift().

guests.shift();

console.log( guests );

//Step - 3: A new guest arrives and should be added to the beginning of the list using unshift().

guests.unshift( 'Jhon Doe' );

console.log( guests );

//Step - 4: Find the index of the guest named "John Doe" and print it.

guests.indexOf( 'Jhon Doe' )

console.log( guests.indexOf( 'Jhon Doe' ) );

//Step - 5: Log the total number of guests by printing the array length. 

guests.length

console.log(guests.length);



// problem 2:(Grade Evalution)

let score = 85;

// if the score is 90 or higher,assign grade "A".

if(score == 90 || score > 90){
    console.log( "Grade is A" );
};

// The score is 80 or higher but less than 90,assign grade "B"

 if(score >=80 && score < 90){
    console.log( "Grade is B" );

 };

 // The score is 70 or higher but less than 80,assign grade "B"

 if( score >=70 && score <80 ){
    console.log( "Grade is c" );
 };

 // The score is 60 or higher but less than 70,assign grade "B"

 if( score >=60 && score <70 ){
    console.log( "Grade is D" );
 };
 

//The score is below 660,assign grade F

if( score < 60 ){
    console.log( "Grade is F" );
 };


//  problem:4(Modify an Array of Colors)

let colors =[ "Red","Blue","Green" ];
// Add the color "Yellow" to the end of the array using push().

colors.push("yellow");

console.log( colors );

//  Remove the first color using shift().

colors.shift();

console.log( colors );

// Add the color "Purple" to the beginning using unshift().

colors.unshift( "purple" );

console.log( colors );

// Find the index of the color "Blue" and remove it from the array.

colors.indexOf( "Blue" );

console.log( colors.indexOf( "Blue" ) );

// Print the current array and its length.

colors.length

console.log( colors.length );

// problem:4(Weather Check)

let temperature = 15;
let isRaining = true;

// If the temperature is below 0°C,suggest wearing "heavy jacket".

if( temperature < 0 ){
    console.log( "Wearing Heavy jacket" );
}


else if (temperature >= 0 && temperature <= 20 && isRaining === true ) {
    console.log(" wearing raincoat and sweater ");
  }
  
  
  else if (temperature > 20 && isSunny === true ) {
    console.log(" Wearring T-shirt and sunglasses");
  }
  
 else{
   console.log("Wear regular clothes");
 } 


 
