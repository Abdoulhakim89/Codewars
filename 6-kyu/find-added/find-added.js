function findAdded(st1, st2){
  for(let i = 0; i < st1.length; i++){
    st2 = st2.replace(st1[i], '');
  }
  return st2.split('').sort((a, b) => a - b).join('');
}