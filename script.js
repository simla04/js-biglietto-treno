// Il programma dovrà chiedere all'utente 
    //-il numero di chilometri che vuole percorrere e l'
    //-età del passeggero.
// Sulla base di queste informazioni dovrà 
    //-calcolare il prezzo totale del viaggio, secondo queste regole:
    // //il prezzo del biglietto è definito in base ai km (0.21 € al km)
        // va applicato uno sconto del 20% per i minorenni
        // va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

    let Kilometers = prompt('Quanti kilometri deve fare?');
    let EtaPersona = parseInt(prompt("Quanti anni ha?"));
    const priceKm = 0.21;
    let ticketprice = Kilometers * priceKm; 


    //biglietto con sconto del 20%
    let Discount20 = ticketprice - (ticketprice * 0.2);

    //biglietto con sconto del 40%
    let Discount40 = ticketprice - (ticketprice * 0.4);


    if (EtaPersona <=18){
    ticketprice = Discount20.toFixed(2);
    }
    else if(EtaPersona >= 65){
    ticketprice = Discount40.toFixed(2);
    }
    else{
    ticketprice
    }
    document.getElementById('prezzo-biglietto').innerHTML = `Il prezzo del biglietto è:  ${ticketprice} Є`;