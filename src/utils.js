export function sleep(ms) {
  // 코드를 ms만큼 정지할 수 있다
  // 로딩되는지 확인하기 위해 사용
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}