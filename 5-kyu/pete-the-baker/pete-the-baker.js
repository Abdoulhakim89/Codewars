function cakes(recipe, available) {
  console.log(recipe)
  console.log(available)
let keys = Object.keys(recipe)
let test =keys.every(a => Object.hasOwn(available, a))
let storage = []
if(test){
    keys.forEach(a => {
        storage.push(Math.floor(available[`${a}`]/ recipe[`${a}`]))
    })
}
return storage.length > 0? Math.min(...storage): 0
}