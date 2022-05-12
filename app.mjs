import dicio from './dicionario.mjs';

let fila = new dicio();

let rand = Math.floor(Math.random() * 1000);

let termo = fila.fila[rand].split('');
console.log(termo[0]);
console.log(termo[1]);
console.log(termo[2]);
console.log(termo[3]);
console.log(termo[4]);

let concat = []

let palpite = []

palpite[0] = document.getElementById("letra11");
palpite[1] = document.getElementById("letra12");
palpite[2] = document.getElementById("letra13");
palpite[3] = document.getElementById("letra14");
palpite[4] = document.getElementById("letra15");

function verifica(){

    document.getElementById("letra31").innerHTML = palpite[0].value;
    document.getElementById("letra32").innerHTML = palpite[1].value;
    document.getElementById("letra33").innerHTML = palpite[2].value;
    document.getElementById("letra34").innerHTML = palpite[3].value;
    document.getElementById("letra35").innerHTML = palpite[4].value;

    
    let j,i,k,l;

    for(l = 0; l<5; l++){
        concat[l] = palpite[l].value;
    }

    concatenado = concat.join('');
    maiusculaconcat = concatenado.toUpperCase();

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

    

    console.log(concatenado);
    for(k=0; k<1244; k++){
        if(maiusculaconcat==fila[k]){

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if(termo[i]==palpite[j].value.toUpperCase()){
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
                            if(document.getElementById("gab21").style.backgroundColor == "green"){

                            }else{
                            document.getElementById("gab21").style.backgroundColor = "yellow";}
                        break;
                        case 1:
                            if(document.getElementById("gab22").style.backgroundColor == "green"){

                            }else{
                            document.getElementById("gab22").style.backgroundColor = "yellow";}
                        break;
                        case 2:
                            if(document.getElementById("gab23").style.backgroundColor == "green"){

                            }else{
                            document.getElementById("gab23").style.backgroundColor = "yellow";}
                        break;
                        case 3:
                            if(document.getElementById("gab24").style.backgroundColor == "green"){

                            }else{
                            document.getElementById("gab24").style.backgroundColor = "yellow";}
                        break;
                        case 4:
                            if(document.getElementById("gab25").style.backgroundColor == "green"){

                            }else{
                            document.getElementById("gab25").style.backgroundColor = "yellow";}
                        break;
                        default:
                            console.log("erro")
                    }
                }
            }else{}
        }
    }

}
    else{document.getElementById("resposta").innerHTML = "Meteu essa mané ?!"}
}

document.getElementById("letra11").value = "";
document.getElementById("letra12").value = "";
document.getElementById("letra13").value = "";
document.getElementById("letra14").value = "";
document.getElementById("letra15").value = "";

}
