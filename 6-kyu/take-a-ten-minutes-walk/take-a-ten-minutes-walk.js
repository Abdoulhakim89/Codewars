function isValidWalk(walk) {
if(walk.length!==10) return false
  if(walk.filter(v => v==='n').length !== walk.filter(v => v==='s').length) return false
  if(walk.filter(v => v==='e').length !== walk.filter(v => v==='w').length) return false
  return true
}