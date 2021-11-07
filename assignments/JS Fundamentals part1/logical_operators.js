const language = "English";
let population = "50";
const isIsland = false;
const country = "Portugal";

if (language === "English" && population <= 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
}
else {
    console.log(`${country} does not meet your criteria :(`);
}