function solution(n, lost, reserve) {
  var answer = 0;
  var students = [];
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.map(a => (students[a] -= 1));
  reserve.map(a => (students[a] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i] = 1;
      students[i - 1] = 1;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i] = 1;
      students[i + 1] = 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (students[i] >= 1) {
      answer++;
    }
  }
  return answer;
}
