var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 16
var guests = ["Ahmed", "Ali", "Hamza"];
console.log("Congratulations, I have found a bigger table");
guests.unshift("Huzaifa");
guests.splice(guests.length / 3, 0, "Mustafa");
guests.push("Hasnain");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for the dinner?"));
});
// Question 17
console.log("Unfortunately, i can only invite 2 guests");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Dear ".concat(removedGuest, ", aap chutti karo"));
}
guests.forEach(function (guest) {
    console.log("Hey ".concat(guest, ", aap ajao"));
});
guests.splice(2, guests.length);
console.log(guests);
// Question 18
var places = ["Norway", "Saudi Arabia", "Canada", "Germany", "Russia"];
console.log("ORIGINAL ORDER", places);
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
console.log("Original Order", places);
console.log("Reverse Alphabetical Order", __spreadArray([], places, true).sort().reverse());
;
console.log("Original Order", places);
places.reverse();
console.log("Reversed Order", places);
places.reverse;
console.log("Original Order", places);
places.sort();
console.log("Alphabetical Order", places);
places.sort().reverse();
console.log("Reverse Alphabetical Order", places);
