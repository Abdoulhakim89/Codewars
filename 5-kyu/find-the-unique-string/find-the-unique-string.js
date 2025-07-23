function findUniq(arr) {
  let prev = arr.map(a => {
      a ===''? a= " ": a
      return String([...new Set(a.toLowerCase().split('').sort().join(''))].join(''))
  })
  let ret = prev.filter(a => prev.indexOf(a) === prev.lastIndexOf(a)).toString()
​
  return arr[prev.indexOf(ret)]
}
​