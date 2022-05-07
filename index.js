"use strict";
function editDistance(str = '', str2 = '', showMatrix = false){

    str = str.toLowerCase().trim();
    str2 = str2.toLowerCase().trim();

    const w = str.length;
    const h = str2.length;
    
    let matrix = new Array(h+1);
    
    for (var i = 0; i <= h; i++) {
        matrix[i] = new Array(w+1).fill(0);
    };
    for (let i=0; i <= w; i++) {
        matrix[h][i]= w-i;
    };
    for (let i=0; i <= h; i++) {
        matrix[i][w] = h-i;
    };


    for (let i = h-1; i>=0; i--) {
        for (let j = w-1; j>=0; j--) {
            if (str[j]==str2[i]) {
                matrix[i][j] = Math.min(matrix[i][j+1],matrix[i+1][j],matrix[i+1][j+1]);
            }else {
                matrix[i][j] = 1 + Math.min(matrix[i][j+1],matrix[i+1][j],matrix[i+1][j+1]);
            };
        };
    };
    if (showMatrix) {console.log(matrix);}
    return matrix[0][0];
};

module.exports = editDistance;