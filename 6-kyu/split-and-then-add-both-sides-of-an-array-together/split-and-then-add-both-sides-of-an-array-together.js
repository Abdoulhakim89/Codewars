function splitAndAdd (arr,n){
    if(!n) return arr
    let arr1 = arr.slice(0, Math.floor(arr.length/2)).reverse()
    let arr2 = arr.slice(arr1.length).reverse()
    let added = arr2.map((a, i) => a+(arr1[i] || 0)).reverse()
    // console.log(arr)
    // console.log(added)
    if(n > 1 ) return splitAndAdd(arr=added, n-1)
    return added
    
    
    
}