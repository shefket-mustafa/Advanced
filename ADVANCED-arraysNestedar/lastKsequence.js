function lastKsequence(n,k){
    let array=[];
    

    for (let i = 1; i <= n; i++) {
        
        if(i>=k){
            array.push((i-1)+i);
        } else {
            array.push(1);
        }
    }
}
lastKsequence(6,3);