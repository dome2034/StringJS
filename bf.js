function bf() {
    this.findBrute = function(Text,Pattern){
        let n = Text.length;
        let m = Pattern.length;
        for (let i=0; i <= (n-m) ; i++){ 
            let k = 0; 
            while (k < m && Text[i+k] == Pattern[k]){
                k++;
            }
            if (k == m){          
                return i; 
            }
        }
        return  -1;
    };
};

module.exports = bf; 