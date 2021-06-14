/*
Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

var output = document.getElementById('text')


//    1. GENERO 5 NUMERI CON UN CICLO FOR PER 5 VOLTE POI ASSEGNARLI AD UN SOLO ALERT.
function randomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 2. PREPARO DUE ARRAY DOVE I NUMERI GENERATI E INSERITI DALL'UTENTE VERRANNO PUSHATI AL SUO INTERNO COSI IL PROGRAMMA CONTROLLERA SE IL NUMERO INSERITI SONO UGUALI

var generated_numbers = []
var user_number = []

// 2.1 IN QUESTA ARRAY VERRANNO PUSHATI I NUMERI CHE SONO UGUALI FRA generated_numbers E ser_number
var right_numbers = []

// 3.GENERO PER 5 VOLTE I NUMERI DA INSERIRE NELL'ARRAY PER POI MOSTRARLI NELL'ALERT

while(generated_numbers.length < 5){
    var randomizedNum = randomNum(1,50);
    if(!generated_numbers.includes(randomizedNum)){
        generated_numbers.push(randomizedNum)
    }
}


alert('Memorizza questi numeri ' + generated_numbers)


setTimeout (function(){
while(user_number.length < 5){
    var num_request = parseInt(prompt('Inserisci un numero'))
    if(isNaN(num_request) || num_request < 1 || num_request > 50){
        alert('devi inserire dei numeri fra 1 e 50')
    var num_request = parseInt(prompt('Inserisci un numero'))
    }else{
        user_number.push(num_request)
    }

    if (generated_numbers.includes(num_request)){
        right_numbers.push(num_request)
    }
}
    if(right_numbers.length > 0){
        output.innerHTML = 'Hai indovinato ' + right_numbers.length + 'numeri eccoli ' + right_numbers 
    }
 
    if (right_numbers.length === 5) {
        output.innerHTML = 'Complimenti hai vinto hai ecco i tuo numeri! '  + rightNumbers;
    }else{
        output.innerHTML = 'Mi dispiace hai perso non hai indovinato nessun numero';
    }


},5000)


















