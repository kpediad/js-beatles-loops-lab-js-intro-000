function theBeatlesPlay(musicians, instruments) {
  var resultArray = new Array()
  for(let i = 0; i < musicians.length; i++) {
    resultArray.push(musicians[i] + "plays" + instruments[i])
  }
  return resultArray
}
