let scelta;

do{
    scelta = Number(prompt('Inserisci il numero corrispondente alla bevanda desiderata: 1 - Acqua, 2 - coca cola, 3 - aranciata'));
    
    switch (scelta){
        case 1:
        console.log(`è stata selezionata l'acqua`);
        break;
        case 2:
        console.log(`è stata selezionata la coca cola`);
        break;
        case 3:
        console.log(`è stata selezionata l'aranciata`);
        break;
        default:
        console.log(`la scelta inserita non è valida, riprova`);
        
    }

}while(scelta != 1 && scelta !=2 && scelta != 3)