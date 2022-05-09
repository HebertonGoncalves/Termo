let termo = [];
termo[0] = 'T';
termo[1] = 'E';
termo[2] = 'R';
termo[3] = 'M';
termo[4] = 'O';

let palpite = []

palpite[0] = document.getElementById("letra11");
palpite[1] = document.getElementById("letra12");
palpite[2] = document.getElementById("letra13");
palpite[3] = document.getElementById("letra14");
palpite[4] = document.getElementById("letra15");

function verifica(){

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(termo[i]==palpite[j].value){
                if(i==j){
                    console.log("verde");
                }else{console.log("amarelo")}
            }else{console.log("preto")
                                       
        }
        }
    }

}