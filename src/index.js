
module.exports = function makeExchange(currency) {
    
    var coins = {};
    var bigError = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var cur = currency;
    var coinsValue = [50,25,10,5,1];
    var coinsName = ["H","Q","D","N","P"];
    if (cur <= 0 ){
        return coins;
    }
    if (cur >10000){
        return bigError;
    }
    for( var i = 0; i < coinsValue.length; i++){
        var coin = coinsValue[i];
        var sumCoins = cur / coin;
        if(sumCoins > 0){
            sumCoins = Math.floor(sumCoins);
        }
        cur = cur - (coin * sumCoins);
        if(sumCoins > 0){
            if( i == 0){
                coins.H = sumCoins;
            }
            else if( i == 1){
                coins.Q = sumCoins;
            }
            else if( i == 2){
                coins.D = sumCoins;
            }
            else if( i == 3){
                coins.N = sumCoins;
            }
            else if( i == 4){
                coins.P = sumCoins;
        }
    }
    }
    return coins;
}
