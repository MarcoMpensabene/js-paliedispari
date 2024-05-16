// > Esercizio Palindroma

let userString = prompt("Inserisci una stringa");

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