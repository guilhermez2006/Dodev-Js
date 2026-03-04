function targetNums() {
  let nums = [1, 2, 5, 2, 3, 2, 10];
  let numsIndice = [];
  let target = 2;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      numsIndice.push(i);
    }
  }
  return numsIndice;
}

let resultado = targetNums();
console.log(resultado);
