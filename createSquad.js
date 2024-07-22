const createListPlayers = require('./csvToJson');

const csvFilePath = 'club-analyzer.csv';

const med83 =['83','83','83','83','83','83','83','83','83','82','82']

const players = createListPlayers(csvFilePath, (err, savedPlayers) => {return savedPlayers});

console.log(players)


//console.log(player);


function isRepeat(arr, elem){
    for(i = 0; i < arr.length; i++){
        return arr[i].Name === elem;
    }
}

///  platillas

/** 

Plantilla 89: 91 x 2 + 89 x 5 + 88 + 84 x 3
                               90 x 2 + 89 x 5 + 87 x 4
                               90 + 89 x 6 + 88 x 3 + 87

Plantilla 88: 91 + 2 x 89 + 2 x 88 + 87 + 86 + 4 x 85
                               90 x 2 + 89 + 88 x 2 + 86 x 3 + 85 x 3
                               89 x 3 + 88 x 4 + 85 x 4

Plantilla 87: 88 x 5 + 85 x 3 + 84 x 3
                89 x 2 + 88 + 87 x 2 + 85 x 3 + 84 x 3
                               88 x 3 + 87 x 4 + 84 x 4

Plantilla 86: 2 x 88 + 87 + 86 + 85 + 6 x 84

Plantilla 85: 87 + 5 x 85 + 3 x 84 + 2 x 83

Plantilla 84: 86 + 4 x 84 + 6 x 83

Plantilla 83: 83 x 9 + 82 x 2

*/