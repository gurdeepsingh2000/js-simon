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

// 2. PREPARO UN'ARRAY DOVE I NUMERI GENERATI CASUALMENTE VERRANNO PUSHATI AL SUO INTERNO COSI IL PROGRAMMA CONTROLLERA SE IL NUMERO INSERITO DALL'UTENTE E IL NUMERO ALL'INTERNO DI QUESTO ARRAY SONO UGUALI.

var generated_numbers = []

// 3.GENERO PER 5 VOLTE I NUMERI DA INSERIRE NELL'ARRAY PER POI MOSTRARLI NELL'ALERT

while(generated_numbers.length < 5){
    var randomizedNum = randomNum(1,50);
    if(!generated_numbers.includes(randomizedNum)){
        generated_numbers.push(randomizedNum)
    }
}


alert('Memorizza questi numeri ' + generated_numbers)

var time_left = 30

setInterval(timer , 1000)

var countdown = function timer(){
    if (time_left <= 0){
        clearInterval(countdown)
    }
    output.innerHTML = 30 - time_left
    time_left--
}

















