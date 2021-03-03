const algorithm = (q) => {
  const numbers = [];
  let sliceNumber = "";

  for (let i = 0; i < q.length; i++) {
    if (!isNaN(q[i])) {
      sliceNumber += q[i];
    } else {
      sliceNumber && numbers.push(sliceNumber);
      sliceNumber = "";
    }
  }

  const minIndex = numbers.indexOf(String(Math.min(...numbers)));
  const maxIndex = numbers.indexOf(String(Math.max(...numbers)));
  return minIndex + maxIndex;
};
const q =
  "ab23c4d56e78f9g12h34i5j12k45l67n89m99o1k123p456q567r768s890t67u456v345w234x23y239z";

console.log(algorithm(q));
