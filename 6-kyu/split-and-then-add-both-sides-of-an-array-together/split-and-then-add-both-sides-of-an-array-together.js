const splitAndAdd = (arr,n) => {
    if(!n) return arr;
    let arr1 = arr.slice(0, Math.floor(arr.length/2)).reverse();
    let arr2 = arr.slice(arr1.length).reverse();
    let added = arr2.map((a, i) => a+(arr1[i] || 0)).reverse();
    
    return n > 1? splitAndAdd(arr=added, n-1): added
    
}