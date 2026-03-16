let arrNums = [1, 1, 1, 2, 2, 2];

function removerDuplicatas(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                // Remove elemento duplicado no índice j
                nums.splice(j, 1);
                // Quando splice remove um item, o array diminui, e todos elementos à direita deslocam 1 posição pra esquerda.
                // Sem j--, o próximo j++ pularia o elemento que veio pra posição atual.
                j--;
            }
        }
    }
    return nums;
}

let resultado = removerDuplicatas(arrNums);
console.log(resultado);