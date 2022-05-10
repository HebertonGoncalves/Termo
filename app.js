let termo = [];
termo[0] = 'P';
termo[1] = 'A';
termo[2] = 'R';
termo[3] = 'I';
termo[4] = 'O';

let palpite = []

palpite[0] = document.getElementById("letra11");
palpite[1] = document.getElementById("letra12");
palpite[2] = document.getElementById("letra13");
palpite[3] = document.getElementById("letra14");
palpite[4] = document.getElementById("letra15");

function verifica(){

    document.getElementById("gab21").style.backgroundColor = "black";
    document.getElementById("letra21").innerHTML = "";
    document.getElementById("gab22").style.backgroundColor = "black";
    document.getElementById("letra22").innerHTML = "";
    document.getElementById("gab23").style.backgroundColor = "black";
    document.getElementById("letra23").innerHTML = "";
    document.getElementById("gab24").style.backgroundColor = "black";
    document.getElementById("letra24").innerHTML = "";
    document.getElementById("gab25").style.backgroundColor = "black";
    document.getElementById("letra25").innerHTML = "";


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(termo[i]==palpite[j].value){
                if(i==j){
                    switch(i){
                        case 0:
                            document.getElementById("gab21").style.backgroundColor = "green";
                            document.getElementById("letra21").innerHTML = palpite[j].value;
                        break;
                        case 1:
                            document.getElementById("gab22").style.backgroundColor = "green";
                            document.getElementById("letra22").innerHTML = palpite[j].value;
                        break;
                        case 2:
                            document.getElementById("gab23").style.backgroundColor = "green";
                            document.getElementById("letra23").innerHTML = palpite[j].value;
                        break;
                        case 3:
                            document.getElementById("gab24").style.backgroundColor = "green";
                            document.getElementById("letra24").innerHTML = palpite[j].value;
                        break;
                        case 4:
                            document.getElementById("gab25").style.backgroundColor = "green";
                            document.getElementById("letra25").innerHTML = palpite[j].value;
                        break;
                        default:
                            console.log("erro")
                    }
                }else{
                    
                    switch(j){
                        case 0:
                            document.getElementById("gab21").style.backgroundColor = "yellow";
                        break;
                        case 1:
                            document.getElementById("gab22").style.backgroundColor = "yellow";
                        break;
                        case 2:
                            document.getElementById("gab23").style.backgroundColor = "yellow";
                        break;
                        case 3:
                            document.getElementById("gab24").style.backgroundColor = "yellow";
                        break;
                        case 4:
                            document.getElementById("gab25").style.backgroundColor = "yellow";
                        break;
                        default:
                            console.log("erro")
                    }
                }
            }else{console.log("preto")
                                       
        }
        }
    }

}