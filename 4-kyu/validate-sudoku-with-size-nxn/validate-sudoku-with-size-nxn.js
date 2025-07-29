var Sudoku = function(data) 
{
  console.log(data)
    let test =""
    let grids = [];let vertical=[];let horizontal;
    let end = Math.sqrt(data.length);
    const verify = a => String(a) === test
    for(let i = 1; i <= data.length; i++){
        test += i
    }
    for(let i = 0; i< data.length; i++){
        let test = ""
        test+= String(data.map(a => a[i]))
        vertical.push(test)
    }
​
    for(let i = 0; i < data.length; i+= end){
        let dum = data.slice(i, i+end)
        for(let j = 0; j < data.length; j += end){
            let block = dum.map(a=> a.slice(j, j+end)).flat().sort((a,b)=> a-b).join('')
            grids.push(block)
        }
    }
  return {
    isValid: function() {
        vertical = vertical.map(a => a.split(',').sort((a,b)=> a-b).join(''))
        horizontal = data.map(a => a.sort((a,b)=> a-b).join(''))
    return [...vertical, ...horizontal, ...grids].every(verify)
    }
  };
};