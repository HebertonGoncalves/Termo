let termo = [];
termo[0] = 'T';
termo[1] = 'E';
termo[3] = 'R';
termo[3] = 'M';
termo[4] = 'O';

let palpite = []

palpite[0] = document.getElementById("letra11");
palpite[1] = document.getElementById("letra12");
palpite[2] = document.getElementById("letra13");
palpite[3] = document.getElementById("letra14");
palpite[4] = document.getElementById("letra15");

function verifica(){

    if (termo[0] == palpite[0].value){
        console.log("verde");
    }else{
        console.log("vermelho");
        console.log(termo[0]);
        console.log(palpite[0].value);
    }


}