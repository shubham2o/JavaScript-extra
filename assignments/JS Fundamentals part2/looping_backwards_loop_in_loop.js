let listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for(let i = 0; i <= listOfNeighbours.length - 1; i++) {
    for(let y = 0; y <= listOfNeighbours[i].length - 1; y++ ) {
        console.log("Neighbour : " + listOfNeighbours[i][y]);
    }
}