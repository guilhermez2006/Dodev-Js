let arrNums = [1, 3, 5, 6,7];
let target = 7;

function buscarPosicaoInsercao(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      return i;
    } else if (target < nums[i]) {
      return i;
    }
  }
  return nums.length;
}

let resultado = buscarPosicaoInsercao(arrNums, target);
console.log(resultado);