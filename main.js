// - - - PROGRAMMA - - -

let sceltaBevanda = prompt('Scegli una bevanda: \n 1 - Acqua \n 2 - coca cola \n 3- Birra');

while (sceltaBevanda != 1 && sceltaBevanda != 2 && sceltaBevanda != 3){
    
    sceltaBevanda = prompt('Scegli una bevanda: \n 1 - Acqua \n 2 - coca cola \n 3- Birra');
    
}if(sceltaBevanda == 1){
    
    console.log('E’ stata selezionata l’acqua');
    
}else if(sceltaBevanda == 2){
    
    console.log('E’ stata selezionata coca cola');
    
}else if(sceltaBevanda == 3){
    
    console.log('E’ stata selezionata birra');
    
}


// - - - PROGRAMMA CORRETTO - - -

let sceltaBevanda = prompt('Scegli una bevanda: \n 1 - acqua \n 2 - coca cola \n 3- birra');

let water = 'acqua'

let coke = 'coca cola'

let beer = 'birra'

while (sceltaBevanda != water && sceltaBevanda != coke && sceltaBevanda != beer){
    
    sceltaBevanda = prompt('Scegli una bevanda: \n 1 - acqua \n 2 - coca cola \n 3- birra');
    
}switch(sceltaBevanda){
    
    case 'acqua':
    console.log('E’ stata selezionata l’acqua');
    break;
    
    case coke:
    console.log('E’ stata selezionata coca cola');
    break;
    
    case beer:
    console.log('E’ stata selezionata birra');
    break;
    
}
