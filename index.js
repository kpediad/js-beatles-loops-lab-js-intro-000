function theBeatlesPlay(musicians, instruments) {
  var resultArray = new Array()
  for(let i = 0; i < musicians.length; i++) {
    resultArray.push(musicians[i] + " plays " + instruments[i])
  }
  return resultArray
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}
