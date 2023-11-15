function solution(numbers, target) {
  let answer = 0;

  function exc(level, sum) {
    if (level == numbers.length) {
      if (sum == target) {
        answer++;
      }
      return;
    }
    exc(level + 1, sum + numbers[level]);
    exc(level + 1, sum - numbers[level]);
  }
  exc(0, 0);

  return answer;
}
