function printDeckOfCards(cards){

    function createCard(){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S:'♠',
            H:'♥',
            D:'♦',
            C:'♣'
        }
        let face;
        let suit;
        let validCards='';

        for (const card of cards) {
            let splitted = card.split("");
            if(splitted.length>2){
                 face = splitted[0]+splitted[1];
                 suit = splitted[2];
            } else {
                 face = splitted[0];
                 suit = splitted[1];
            }

            if(!faces.includes(face) || !suits[suit]){
                console.log( `Invalid card: ${face}${suit}`);
                return;
            }
            if(!face === face.toUpperCase() && !suit === suit.toUpperCase()){
                console.log( `Invalid card: ${face}${suit}`);
                return;
    
            }
            if(typeof face !== 'string' || typeof suit !== 'string'){
                console.log( `Invalid card: ${face}${suit}`);
                return;
            }
            validCards+= (face+suits[suit]+" ");
        }
        console.log(validCards);
    }
    return createCard();

}
printDeckOfCards(['5S', '3D', 'QD', '1C']);
//module.exports = solve;