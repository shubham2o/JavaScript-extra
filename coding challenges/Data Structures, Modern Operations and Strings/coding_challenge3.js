"use strict";

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);


// 1. 
console.log(`
1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(gameEvents.values());                 // gameEvents.values() means all the values that are stored in the variable gameEvents.
const events = [...new Set(gameEvents.values())];
console.log(events);


// 2.
console.log(`
2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);


// 3.
console.log(`
3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const time = [...gameEvents.keys()].pop();
console.log(time);
const average = (time / gameEvents.size);
console.log(average);
console.log(`An event happened, on average, every ${average} minutes.`);


// 4.
console.log(`
4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? `FIRST` : `SECOND`;
    console.log(`[${half} HALF] ${min}: ${event}`);
}