const fs = require('node:fs');
const csv = require('csv-parser');
//save players

function createListPlayers (csvFilePath, callback){
    const savedPlayers = [];

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
            if(data.Rating > 80){
                savedPlayers.push(data); 
            }
        })
        .on('end', () => {
            console.log('csv is processed!!')
            callback(null, savedPlayers);
        })
        .on('error', (err) =>{
            callback(err)
        })
}

module.exports = createListPlayers;