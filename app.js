var bronzePlayers = [];
var platePlayers = [];
var goldPlayers = [];

//Plantilla 83: 83 x 9 + 82 x 2
const med83 = [83,83,83,83,83,83,83,83,83,82,82];
var createdMed83 = [];
//Plantilla 84: 86 + 4 x 84 + 6 x 83
const med84 = [86,84,84,84,84,83,83,83,83,83,83];
var createdMed84 = [];
//Plantilla 85: 87 + 5 x 85 + 3 x 84 + 2 x 83
const med85 = [87,85,85,85,85,85,84,84,84,83,83];
var createdMed85 = [];
//Plantilla 86: 2 x 88 + 87 + 86 + 85 + 6 x 84
const med86 = [88,88,87,86,85,84,84,84,84,84,84];
var createdMed86 = [];
//Plantilla 87: 88 x 5 + 85 x 3 + 84 x 3
const med87 = [88,88,88,88,88,85,85,85,84,84,84];
var createdMed87 = [];
// plantilla 88: 91 + 2 x 89 + 2 x 88 + 87 + 86 + 4 x 85
const med88 = [91,91,89,89,88,87,86,85,85,85,85];
var createdMed88 = [];
//Plantilla 89: 91 x 2 + 89 x 5 + 88 + 84 x 3
const med89 = [91,91,89,89,89,89,89,88,84,84,84];
var createdMed89 = [];

document.getElementById('upload').addEventListener('change', function(event){
    const file = event.target.files[0];
    if(file){
        Papa.parse(file, {
            header:true,
            dynamicTyping: true,
            complete: function(results){
                //console.log(results.data);
                processData(results.data);
            }
        })
    }
});
function processData(data){
    // recorre y almacena en localStorage por media de jugadores
    
    //bronze players
    for(var players of data){
        if(players.Rating > 46 && players.Rating < 65){
            bronzePlayers.push(players)
        } 
    }
    localStorage.setItem('bronzePlayers', JSON.stringify(bronzePlayers));
    
    //platePlayers
    for(var player of data){
        if(player.Rating > 64 && player.Rating < 75){
            platePlayers.push(player);
        }
    }
    localStorage.setItem('platePlayer', JSON.stringify(platePlayers));

    //gold players
    for(var player of data){
        if(player.Rating > 74){
            goldPlayers.push(player)
        }
    }
    localStorage.setItem('goldPlayers', JSON.stringify(goldPlayers));
}

//crea un lista para completar un lista de jugadores con media 83
function createMed83(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med83){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed83.push(resultado);
        }
    }
}

function createMed84(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med84){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed84.push(resultado);
        }
    }
}
function createMed85(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med85){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed85.push(resultado);
        }
    }
}
function createMed86(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med86){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed86.push(resultado);
        }
    }
}

function createMed87(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med87){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed87.push(resultado);
        }else{
            createMed87.push('Not Fund');
        }
    }
}
function createMed88(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med88){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed88.push(resultado);
        }else{
            createMed88.push('Not Fund');
        }
    }
}
function createMed89(){
    let gold = JSON.parse(localStorage.getItem('goldPlayers'));
    var usedPlayers = [];
    for(var med of med89){
        const resultado = gold.find((player) => player.Rating === med && !usedPlayers.includes(player));
        if(resultado){
            usedPlayers.push(resultado);
            createdMed89.push(resultado);
        }else{
            createMed89.push('Not Fund');
        }
    }
}
//data es un array de players

function generatePLayerCard(data){
    //alert('llega la funcion')
    //se debe mejorar
    //console.log(data);
    let html = '';
    const container = document.getElementById('content');
    data.forEach(element => {
        //console.log(element);
        html += `<div class='card' >`
            html +=`<p> ${element.Name} ${element.Lastname} </p>`
            html +=`<p>${element.Country}</p>`
            html +=`<p>${element.Rating} ${element.Rarity}</p>`
            html +=`<p>${element.League} ${element.Club} </p>`
        html += `</div>`
        html += `<br>`
    });
    document.getElementById('content').innerHTML = html;
}

createMed83();
createMed84();
createMed85();
createMed86();
createMed87();
createMed88();
createMed89();

const btn83 = document.getElementById("button83")
btn83.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed83);
})

const btn84 = document.getElementById("button84")
btn84.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed84);
})
const btn85 = document.getElementById("button85")
btn85.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed85);
})

const btn86 = document.getElementById("button86")
btn86.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed86);
})


const btn87 = document.getElementById("button87")
btn87.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed87);
})

const btn88 = document.getElementById("button88")
btn88.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed88);
})


const btn89 = document.getElementById("button89")
btn89.addEventListener("click", (e) => {
    e.preventDefault();
    generatePLayerCard(createdMed89);
})
//const testSquad = createMed83();









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






