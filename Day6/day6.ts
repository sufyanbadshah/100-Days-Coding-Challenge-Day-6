// Question 16
let guests : string[] = ["Ahmed","Ali","Hamza"];
console.log("Congratulations, I have found a bigger table");

guests.unshift("Huzaifa");
guests.splice(guests.length / 3 , 0 , "Mustafa");
guests.push("Hasnain");

guests.forEach(guest => {
  console.log(`Dear ${guest}, would you like to join me for the dinner?`);
    
});


// Question 17

console.log("Unfortunately, i can only invite 2 guests");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, aap chutti karo`);
}

guests.forEach(guest => {
    console.log(`Hey ${guest}, aap ajao`);
    
    
});


guests.splice(2, guests.length);
console.log(guests);


// Question 18

let places : string [] = ["Norway", "Saudi Arabia","Canada", "Germany", "Russia"]
console.log("ORIGINAL ORDER", places);

console.log("Alphabetical Order:", [...places].sort());

console.log("Original Order", places)

console.log("Reverse Alphabetical Order", [...places].sort().reverse());
;

console.log("Original Order", places)
places.reverse()
console.log("Reversed Order", places);

places.reverse
console.log("Original Order", places);

places.sort()
console.log("Alphabetical Order", places);

places.sort().reverse()
console.log("Reverse Alphabetical Order", places);





