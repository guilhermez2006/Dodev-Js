let arrNums = [2, 3, 6, 9, 4];

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]; // par encontrado — early return, encerra imediatamente
            }
        }
    }
    return []; // early return: só alcançado se nenhum par somar o target
}

let resultado = twoSum(arrNums, 7)
console.log(resultado)