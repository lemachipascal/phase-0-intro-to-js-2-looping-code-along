// Code your solutions in this file
function writeCards(names, graduation){
    let messages = [];
    
    for (let i=0; i< names.length; i++){
        
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`

        messages.push(message);
    }

    return messages;

}

writeCards(['Guadalupe', 'Ollie', 'Aki'], 'graduation');

//while loop
function countDown(integer){
    while(integer >= 0 ){
        console.log(integer)
        integer --
    }
}
countDown();
