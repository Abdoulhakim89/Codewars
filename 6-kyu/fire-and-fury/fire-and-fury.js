var fireAndFury = function(tweet) {
  console.log(tweet)
  const arrTweet = tweet.match(/FURY|FIRE/g)
  console.log(arrTweet)
  if(arrTweet === null || /[^FIREUY]/.test(tweet)){
    return 'Fake tweet.'
  }
  const count = [[arrTweet[0],1]]
  
  for(let i = 1; i<arrTweet.length; i++){
      if(arrTweet[i] === count[count.length-1][0]){
          count[count.length-1][1] += 1
      } else {
          count.push([arrTweet[i],1])
      }
  }
  let newCount = count.map(val => {
      if(val[0] === 'FIRE'){
          let output = ''
          output += 'You '
          for(let i = 1; i < val[1]; i++) output += 'and you '
          output += 'are fired!'
          return output
      } else {
          let out = ''
          out += 'I am '
          for(let i = 1; i < val[1]; i++) out += 'really '
          out += 'furious.'
          return out
      }
  })
  return newCount.join(' ')
}