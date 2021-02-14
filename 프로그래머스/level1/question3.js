function solution(numbers) {
  var answer = [];

  for (let n = 0; n < numbers.length; n++) {
    for (let j = n + 1; j < numbers.length; j++) {
      let sum = numbers[n] + numbers[j]
      if (!answer.includes(sum)) {
        answer.push(sum)
      }
    }
  }
  answer.sort((a, b) => a - b)
  return answer;
}