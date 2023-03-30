
function displayVs(){
    console.log('Pikatchu VS Evoli');
}

function startFirst(){
    let choice = Math.floor(Math.random()*2);
    if (choice==1){
        console.log('Le tirage au sort a decidé que Evoli attaquait en premier');
        return 1;
    }else{
        console.log('Le tirage au sort a decidé que Pikatchu attaquait en premier');
        return 2;
    }
}
function showPdv(pokemon1,pokemon2){
    if (choice==1){
        console.log(pokemon1.nom+ ' a '+pokemon1.maxPdv+ ' points de vie.');
        console.log(pokemon2.nom+ ' a '+pokemon2.maxPdv+ ' points de vie.');
    }else{
        console.log(pokemon2.nom+ ' a '+pokemon2.maxPdv+ ' points de vie.');
        console.log(pokemon1.nom+ ' a '+pokemon1.maxPdv+ ' points de vie.');
    }
}
function coupCritique(){
    let isCritique = false;
    let interval = Math.random();

    if(interval<=0.1){
        isCritique = true;
    }
    return isCritique;
}
