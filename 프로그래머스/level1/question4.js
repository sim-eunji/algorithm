function solution(s) {
  let length = s.length;
  if(length === 4 || length === 6) {
    return s.split("").every((c)=>!isNaN(c))
  }
  return false;
}