
var inputArr = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
]
function mergeMeetings (array) {
  var unordered = array
  var listOfTime = []
  for (let i = 0; i < unordered.length; i++) {
    var currentLowest = unordered[i].startTime
    for (let j = i; j < unordered.length; j++) {
      if (unordered[j].startTime < currentLowest) {
        currentLowest = unordered[j].startTime
        var temp = unordered[i]
        unordered[i] = unordered[j]
        unordered[j] = temp
      }
    }
  }
  listOfTime = unordered
  var finalTimes = [listOfTime[0]]

  for (var i = 1; i < listOfTime.length; i++) {
    let flag = true
    if (finalTimes[finalTimes.length - 1].endTime >= listOfTime[i].startTime) {
      if (finalTimes[finalTimes.length - 1].endTime < listOfTime[i].endTime) {
        finalTimes[finalTimes.length - 1].endTime = listOfTime[i].endTime
      }
      flag = false
    }
    if (flag) {
      finalTimes.push(listOfTime[i])
      flag = true
    }
  }
  console.log(finalTimes)
};

mergeMeetings(inputArr)
