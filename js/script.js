// > Esercizio Palindroma

let userString = prompt("Inserisci una stringa").toLowerCase().trim();

function itIsPalindroma(string){
    let reverse = "";
    for(let i = string.length - 1 ; i >= 0 ; i--){
        reverse = reverse + string[i];
    }
    if (reverse === string){
        return true;
    } else {
        return false;
    }
}
if (itIsPalindroma(userString) == true){
    console.log("La parola è Palindroma");
} else {
    console.log("la parola non è Palindroma");
}

// > Esercizio Pari e Darispari 

let userChoice = prompt("Inserisci pari o dispari").trim().toLowerCase();
if (userChoice !== "pari" && userChoice !== "dispari"){
    userChoice = "pari";
}
console.log("L'utente ha scelto : ", userChoice)

    let userNumberChoice = Number.parseInt(prompt("Type a number from 1 to 5 "));
if (Number.isNaN(userNumberChoice) == true  || userNumberChoice > 5){
    let random = Math.floor(Math.random() * 5 ) + 1;
    userNumberChoice = random;
}

function computerRandomNum(){
    let randomPcNum = Math.floor(Math.random() * 5 ) + 1;
    return randomPcNum;

}

let pcNumber = computerRandomNum();

let sommaGame = userNumberChoice + pcNumber;

// console.log(sommaGame , userNumberChoice , pcNumber);

function itIsEvenOdd(somma){
    if(somma % 2 === 0){
        return true;
    } else {
        return false;
    }
}

if (itIsEvenOdd(sommaGame) === true){
    console.log("Ha vinto chi ha scelto PARI!");
}
else {
    console.log("Ha vinto chi ha scelto DISPARI!");
    }