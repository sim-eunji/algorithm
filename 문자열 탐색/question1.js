function solution(s) {
  let answer = "YES";
  s = s.toLowerCase()
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] != s[(s.length - 1) - i]) answer = "NO"
  }

  return answer;
}

let str = "goooG";
console.log(solution(str)); 