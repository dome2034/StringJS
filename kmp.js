function kmp(){
    this.findKmpSearch = function (text,pattern) {
    if (pattern.length == 0)
        return 0;  // Immediate match

    // Compute longest suffix-prefix table
    var lsp = [0];  // Base case
    for (var i = 1; i < pattern.length; i++) {
        var j = lsp[i - 1];  // Start by assuming we're extending the previous LSP
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j))
            j = lsp[j - 1];
        if (pattern.charAt(i) == pattern.charAt(j))
            j++;
        lsp.push(j);
    }

    // Walk through text string
    var j = 0;  // Number of chars matched in pattern
    for (var i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) != pattern.charAt(j))
            j = lsp[j - 1];  // Fall back in the pattern
        if (text.charAt(i) == pattern.charAt(j)) {
            j++;  // Next char matched, increment position
            if (j == pattern.length)
                return i - (j - 1);
        }
    }
    return -1;  // Not found
    }
};

module.exports = kmp; 