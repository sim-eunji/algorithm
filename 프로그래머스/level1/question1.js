// 최대공약수, 최소공약수
function solution(n, m) {
  var answer = [];
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));

  return answer;
}

function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function lcm(minNum, maxNum) {
  return minNum * maxNum / gcd(minNum, maxNum);
}

