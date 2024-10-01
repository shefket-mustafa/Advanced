function diagonalSums(matrix){
    let firstDiag=0;
    let secondDiag=0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiag+=matrix[i][i];
        secondDiag+=matrix[i][matrix.length-1-i];
    }
    
    console.log(`${firstDiag} ${secondDiag}`);  
}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);