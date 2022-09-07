module.exports =function fibonaci(n) {
    let n1 = 0,n2 = 1, nextn;
    var array = [];
    for (let i = 1; i <= n; i++) {
        array.push(n1);
        nextn = n1 + n2;
        n1 = n2;
        n2 = nextn;}

        return array;
    
}