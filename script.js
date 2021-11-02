let nombrea = Number(prompt());
let nombreb = Number(prompt());

alert(sommeNombreA(nombrea, nombreb));
alert(sommeNombreS(nombrea, nombreb));
alert(sommeNombreM(nombrea, nombreb));
alert(sommeNombreD(nombrea, nombreb));

function sommeNombreA(nombrea, nombreb){
    let sommeA = nombrea + nombreb;
    return console.log("Le resultat de votre addition est : " + sommeA);
}
function sommeNombreS(nombrea, nombreb){
    let sommeS = nombrea - nombreb;
    return console.log("Le resultat de votre soustraction est : " + sommeS);
}
function sommeNombreM(nombrea, nombreb){
    let sommeM = nombrea * nombreb;
    return console.log("Le resultat de votre multiplication est : " + sommeM);
}
function sommeNombreD(nombrea, nombreb){
    let sommeD = nombrea / nombreb;
    return console.log("Le resultat de votre division est : " + sommeD);
}

/*
let alice = new Array (20 , 81, 6, 9, 17);
let robert = new Array (6, 14, 1, 12, 18);
let marcel = new Array (20, 20, 20, 20, 19.5);
let bertrand = new Array (14, 18, 20, 15, 9);

function prix_panier(notesArray){

    let total = 0;
    const tva = 1.20; 

    for (i = 0; i < notesArray.length; i++){

        total = total + notesArray[i];
    }
    total = total*tva;
    console.log(total);
    return total; 
}

prix_panier(alice);
prix_panier(robert);
prix_panier(marcel);
prix_panier(bertrand);






/*

let romain = new Array(10, 8, 6, 4, 7);
let adrien = new Array(9, 14, 6, 12, 18);
let julien = new Array(8, 0, 6, 1);

function Passage(Array){
    let total = 0
    for(i = 0; i < Array.length; i++){
        total = total + Array[i];    
    }
    total = total / Array.length;
    if(total <= 10.5){
        return "Ta moyenne est de: " + total + ". Tu ne passes pas";
    }
    else{
        return "Ta moyenne est de: " + total + ". Bravo! Tu passes !";  
    }
}
console.log(Passage(romain));
console.log(Passage(adrien));
console.log(Passage(julien));




/*let myArray = [8, 10, 4, 12, 14];
let result = FonctionArray(myArray);

function FonctionArray(myArray) {
    let i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}

if(result < 9){
    alert("Ta moyenne est de: " + result + " Tu ne passe pas en Terminal");
}
else{
    alert("Ta moyenne est de: " + result + " Bravo ! Tu es accepté en Terminal");
}



// version boucle seule 

let notes = [8, 10, 4, 12, 14];
let total = 0;

for(i = 0; notes.length; i++){
    total = total + notes[i]
};
moyenne = total/notes.length
alert(moyenne);


// version boucle double tableau

let notes = new Array ([10, 12], [8, 9, 12], [4, 2])
let total = 0;
let count = 0;

for (i = 0; i < notes.length; i++){

    for (j = 0; j < notes[i].length; j++){
        total = total + notes[i][j];
        count ++
    }
}
total = total / count;
console.log(total)




// version double tableau


let myArray = [[10, 12], [8, 9, 12], [4, 2]];
let result = FonctionArray(myArray);

function FonctionArray(myArray) {
    let i = 0, somme = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        somme = somme + myArray[i++];
}
    return somme / ArrayLen;
}

if(result < 9){
    alert("Ta moyenne est de: " + result + " Tu ne passe pas en Terminal");
}
else{
    alert("Ta moyenne est de: " + result + " Bravo ! Tu es accepté en Terminal");
}
*/