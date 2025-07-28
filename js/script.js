function confirmar() {
  
  let nome = document.getElementById('nome').value.trim()
  let numero = document.getElementById('numero').value
  let mes = document.getElementById('mes').value
  let ano = document.getElementById('ano').value
  let cvc = document.getElementById('cvc').value
let erro = document.getElementById('erro')

  // aqui e pora deixar os campos validos 
  let valido = true

  if (nome === '' || numero.length < 16 || mes === '' || ano === '' || cvc.length < 3) {
    window.alert('Por favor, preencha todos os campos corretamente!')
    erro.style.display = 'block'
    valido = false
  } else {
    erro.style.display = 'none'
  }

  if (!valido) return

  // aqui vai ta estar formatando o numero do cartao para ter o espaçamentos a cada 4 numeros 
  let numeroFormatado = numero.replace(/(.{4})/g, '$1 ')

  document.getElementById('nome-cartao').innerHTML = nome
  document.getElementById('numero-cartao').innerHTML = `<p>${numeroFormatado}</p>`
  document.getElementById('vencimento-cartao').innerHTML = `${mes}/${ano}`
  document.getElementById('cvc-cartao').innerHTML = cvc

  document.querySelector('.formulario-cartao').style.display = 'none'
  document.getElementById('mensagem-sucesso').style.display = 'flex'
}

function recarregar() {
  location.reload()
}
