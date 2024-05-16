function getRandom(n: number, m: number) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num * 1;
}
export const getImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array(20)
          .fill(1)
          .map(() => {
            return getRandom(1, 20);
          })
      );
    }, 2000);
  });
};
