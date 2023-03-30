class Attaque{
    constructor(libelle ,degats){
        this.libelle=libelle;
        this.degats=degats;
    }
}
class Pokemon{
    constructor(nom, numero, taille, poids, type, maxPdv, attaque1, attaque2){
        this.nom=nom;
        this.numero=numero;
        this.taille=taille;
        this.poids=poids;
        this.type=type;
        this.attaque1=attaque1;
        this.attaque2=attaque2;
        this.maxPdv = maxPdv;
        this.pdv = maxPdv;
    }

    attack_one(pokemon, mult){

        if(this.attaque1.degats>=pokemon.pdv){
            console.log(this.nom +' a gagné le combat.il lui restait '+ this.pdv);
            pokemon.pdv -= this.attaque1.degats * mult
            battleOn=false;

        }else{
            pokemon.pdv -= this.attaque1.degats * mult
            console.log(this.nom+' a attaqué. Il a fait '+this.attaque1.degats*mult+' degats.')
        }
    }

    attack_two(pokemon, mult){

        if(this.attaque2.degats>=pokemon.pdv){
            console.log(this.nom +' a gagné le combat.il lui restait '+ this.pdv);
            pokemon.pdv -= this.attaque2.degats * mult
            battleOn=false;
            
        }else{
            pokemon.pdv -= this.attaque2.degats * mult
            console.log(this.nom+' a attaqué. Il a fait '+this.attaque2.degats*mult+' degats.')
        }
    }
    checkWin(pokemon1,pokemon2){
        if(pokemon1.pdv<=0 || pokemon2.pdv<=0){
        
        }
    }

    attaque(pokemon){

        if (coupCritique()){

            if(this.pdv<= 0.2*this.maxPdv){
                this.attack_two(pokemon,2)
            }else{
                this.attack_one(pokemon,2)
            }
        }else{
            
            if(this.pdv<= 0.2*this.maxPdv){
                this.attack_two(pokemon,1);
            }else{
                this.attack_one(pokemon,1);
            }
        }
    }
    
}
// variable setup

let Pikatchu = new Pokemon('Pikatchu',025, 40,6,'electrique',82,new Attaque('statik', 10), new Attaque('paratonnerre',25));
let Evolu = new Pokemon('Evolu',133,30,6.5,'normal',70, new Attaque('adaptabilite', 9), new Attaque('anticipation', 15));

// game logic 
var battleOn = true;
let round=1;

displayVs();
let choice = startFirst(); // who starts
showPdv(Evolu, Pikatchu); // display PDV

// fonction attaque(pokemon1 , pokemon2)
if(choice==1){
    while(battleOn){
        Evolu.attaque(Pikatchu);
        if(Pikatchu.pdv<=0){
            break;
        }
        Pikatchu.attaque(Evolu);
    }
}else{
    while(battleOn){
        Pikatchu.attaque(Evolu);
        if(Evolu.pdv<=0){
            break;
        }
        Evolu.attaque(Pikatchu);
    }
}

// end of game logic


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




