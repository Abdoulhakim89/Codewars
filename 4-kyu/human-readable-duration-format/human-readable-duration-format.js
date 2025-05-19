function formatDuration (seconds) {
  if(seconds < 1) return 'now'
  let years; let days; let hours; let minutes; let secs
  if(seconds > 31536000-1){
    years = Math.floor(seconds/31536000)
    seconds = seconds % 31536000
  }
  if(seconds > 86400-1){
    days = Math.floor(seconds/86400)
    seconds = seconds % 86400
  }
  if(seconds > 3600-1){
    hours = Math.floor(seconds/3600)
    seconds = seconds % 3600
  }
  if(seconds > 60-1){
    minutes = Math.floor(seconds/60)
    seconds = seconds % 60
  }
  secs = seconds
  let output = [`${years} ${years > 1? 'years': 'year'}`, `${days} ${days > 1? 'days': 'day'}`,`${hours} ${hours > 1? 'hours': 'hour'}`,`${minutes} ${minutes > 1? 'minutes': 'minute'}`,`${secs} ${secs > 1? 'seconds': 'second'}`].filter(a => !a.includes(undefined) && a[0] !== '0')
  let len = output.length
  if(len === 1) return output.join()
  return len > 2? `${output.slice(0,-1).join(', ')} and ${output[len-1]}`: output.join(' and ')
}