function esperarUmSegundo() {
  return new Promise((resolve, reject) => {

    setTimeout(function () {
      resolve("Uma promisse")
    }, 1000)

  })
}

esperarUmSegundo().then((msg) => {
  console.log(msg)
})


verificarNumero(5)
  .then(msg => console.log(msg))
  .catch(erro => console.log(erro))