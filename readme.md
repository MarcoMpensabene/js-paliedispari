Esercizio di oggi Pali o Dispari
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


Esercizio Palindroma :
1) Mi inizializzo una variabile con all'interno la richiesta di inserire una parola da parte dell'utente
2) Poi creo una funzione itIsPalindroma che ha come argomenti la stringa da controllare
    - all'interno della funzione creo un'altra variabile (reverse)a cui assegnerò il valore della stringa al contrario in seguito
    - Per invertire la stringa al contrario creo un ciclo for dove :
        - l'indice è uguale alla lunghezza della stringa - 1 ;
        - l'indice deve essere > della lunghezza della stringa ;
        - e poi incremento l'indice per scorrerla;
            - All'interno del ciclo gli andrò a dire che reverse deve essere uguale a se stessa + la stringa da controllare[indicie]
    - Dopo il ciclo vado a chiedere se la stringa iniziale è === alla stringa in reverse , se lo è la funzione ci restituisce true 
3) Invochiamo la funzione e le chiediamo che :
    -se ci restituisce true :
        -allora la parola è palindroma
    -altrimenti : 
        - non lo è 

Esercizio Pari e Dispari :
1) Inizializzo due variabili , una per chiedere all'utente il pari e dispari e la seconda per il numero da 1 a 5
2) Creiamo una funzione randomnumbergen che genera un numero random da 1 a 5 per il computer
    - l'argomento della funzione sarà un numero random da 1 a 5
    - poi creiamo una variabile dove inseriremo la generazione del numero casuale
    - facciamo ritornare come risultato della funzione la variabile
3) Inizializziamo una variabile con il valore restituito dalla prima funzione che sarà il numero randomico del computer
4) Sommiamo le due variabili 
5) Creiamo una seconda funzione per stabilire se la somma trovata è un numero pari o dispari 
    - argomento della funzione sarà la nostra somma da verificare
    - poi diciamo alla funzione che deve controllare se :
        -la somma diviso 2 da resto zero per controllare se è pari
            - e ci ritornerà true
        - altrimenti 
        - false 
6) Invochiamo la seconda funzione per chiedergli :
    - se la funzione restituisce true 
        -ha vinto chi ha scelto pari 
    - altrimenti 
        - ha vinto chi ha scelto dispari;