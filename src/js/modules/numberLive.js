function numberLive(){
    const numbersJackpot = [
        '3 434 231 914 РУБ.',
        '2 846 591 672 РУБ.',
        '1 446 256 153 РУБ.',
        '3 846 392 324 РУБ.',
        '4 210 259 852 РУБ.',
        '2 427 967 419 РУБ.',
    ];

    const numbersTop = [
        '434 681 РУБ.',
        '591 367 РУБ.',
        '256 197 РУБ.',
        '392 793 РУБ.',
        '259 753 РУБ.',
        '967 159 РУБ.',
    ];

    const numberJackpot = document.querySelector(`.jackpot`),
        numberTopOne = document.querySelector(`.number-top-one`),
        numberTopTwo = document.querySelector(`.number-top-two`);
    
    
    
    function numberJack(){
        let i = 0;
        const jackInt = setInterval(function() {
            if(i != 5){
                numberJackpot.textContent = numbersJackpot[i];
                i++;
            } else if(i == 5) {
                i = 0;
            }       
        }, 2000)
    }

    function numTopOne(item){
        let j = 0;
        const topInt = setInterval(function() {
            if(j != 5){
                item.textContent = numbersTop[j];
                j++;
            } else if(j == 5) {
                j = 0;
            }       
        }, 2000)
    }

    function numTopTwo(item){
        let k = 0;
        const topInt = setInterval(function() {
            if(k != 5){
                item.textContent = numbersTop[k];
                k++;
            } else if(k == 5) {
                k = 0;
            }       
        }, 2000)
    }
    numberJack();
    numTopOne(numberTopOne);
    numTopTwo(numberTopTwo);
}

export default numberLive;