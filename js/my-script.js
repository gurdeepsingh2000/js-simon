/*
Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//    1. GENERO 5 NUMERI CON UN CICLO FOR PER 5 VOLTE POI ASSEGNARLI AD UN SOLO ALERT.

function randomNum(min,max){
    return Math.floor(Math.random() * max - min + 1) + min
}

// 2. PREPARO UN'ARRAY DOVE I NUMERI GENERATI CASUALMENTE VERRANNO PUSHATI AL SUO INTERNO COSI IL PROGRAMMA CONTROLLERA SE IL NUMERO INSERITO DALL'UTENTE E IL NUMERO ALL'INTERNO DI QUESTO ARRAY SONO UGUALI.

var generated_numbers = []

// 3.GENERO PER 5 VOLTE I NUMERI DA INSERIRE NELL'ARRAY PER POI MOSTRARLI NELL'ALERT
var len = generated_numbers.length
for(var x = 0; len < 5 ; x++){
    var randomizedNum = randomNum(1,50)
    if(!randomizedNum.includes(generated_numbers)){
        push.generated_numbers(randomizedNum)
    }
}
