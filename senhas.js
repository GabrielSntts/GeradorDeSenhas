function gerarsenha(opcoes = {}) {
  const {
    comprimento = 12,
    maiusculas = true,
    minusculas = true,
    numeros = true,
    simbolos = true,
  } = opcoes

  const caracteres = {
    maiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    simbolos: "!@#$%&*_-/",
  }

  let code = ""
  if (maiusculas) code += caracteres.maiusculas
  if (minusculas) code += caracteres.minusculas
  if (numeros) code += caracteres.numeros
  if (simbolos) code += caracteres.simbolos

  let senha = ""
  for (let c = 0; c < comprimento; c++) {
    const sequencia = Math.floor(Math.random() * code.length)
    senha += code[sequencia]
  }

  return senha
}

const opcoes = {
  comprimento: 14,
  maiusculas: true,
  minusculas: true,
  numeros: true,
  simbolos: true,
}

console.log(
  "Sua senha foi gerada com Sucesso! Sua nova senha é:",
  gerarsenha(opcoes)
)
console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
)
console.log(
  "Mantenha sua senha segura tomando medidas básicas de segurança como: Utilizar diferentes senhas para email, redes sociais, bancos, etc;"
)
console.log("Não compartilhe sua senha e/ou contas com ninguem;")
console.log("Utilize métodos como a verificação de Dois Fatores;")
console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------"
)
console.log(
  "Aproveite o gerador de senhas completamente gratuito e ilimitado!!!"
)
