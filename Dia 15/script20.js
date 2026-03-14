function isSubsequence(s, t) {
  let indiceDaLetraQueEstouProcurando = 0;
  
  // Percorre a string grande 't'
  for (let i = 0; i < t.length; i++) {
    
    // Se a letra atual de 't' é igual à letra que estou procurando em 's'
    if (t[i] === s[indiceDaLetraQueEstouProcurando]) {
      indiceDaLetraQueEstouProcurando++;  // Avança pra próxima letra de 's'
    }
  }
  
  // Se o índice chegou no tamanho de 's', significa que achei todas as letras
  return indiceDaLetraQueEstouProcurando === s.length;
}

// Testes:
console.log(isSubsequence("abc", "ahbgdc"));  // true
console.log(isSubsequence("axc", "ahbgdc"));  // false
console.log(isSubsequence("ace", "abcde"));   // true