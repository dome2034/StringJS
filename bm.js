function bm(){
    this.findBoyerMoore = function(text,pattern){
        let n = text.length;
        let m = pattern.length;
        if (m == 0){
            return 0;    
        } 
        let last = [];
        for (let i = 0; i < 255; i++) { 
            last[i] = -1;
        }
        for (let j = 0; j < m; j++) {
            last[pattern.charCodeAt(j)] = j;
        }

        let i = m-1;
        let k = m-1;

         while (i < n) {
            if (text[i] == pattern[k]) { 
                if (k == 0) return i; 
                i--; 
                k--;  
            } 
            else{
                i += m - Math.min(k, 1 + last[text.charCodeAt(i)]); 
                k = m - 1;
            }
        }
        return -1;
    }
};

module.exports = bm; 
