function getRandom(n: number, m: number) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num * 1;
}

const imageH = new Map([
  [1, 300],
  [2, 300],
  [3, 280],
  [4, 320],
  [5, 200],
  [6, 300],
  [7, 200],
  [8, 400],
  [9, 280],
  [10, 200],
  [11, 200],
  [12, 280],
  [13, 300],
  [14, 200],
  [15, 200],
  [16, 300],
  [17, 300],
  [18, 250],
  [19, 200],
  [20, 200],
]);

export const getImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array(50)
          .fill(1)
          .map(() => {
            const id = getRandom(1, 20);
            return {
              src: "/images/" + id + ".jpg",
              height: imageH.get(id),
            };
          })
      );
    }, 2000);
  });
};
