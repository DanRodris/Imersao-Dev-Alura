var nome = "Danilo"
var notaDoPrimeiroBimestre = 9.565
var notaDoSegundoBimestre = 7.654
var notaDoTerceiroBimestre = 4.789  
var notaDoQuartoBimestre = 2.9987
  
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
var notaFixada = notaFinal.toFixed(1)

console.log("Bem-vindo! "+ nome)
console.log(notaFixada)

if (notaFixada >= 7){
  console.log("Parabéns você passou")
} 
else{
  console.log("Você não passou")
}

// Isso é um comentário

// Revisão
// Variáveis, Strings, Console.log, toFixed, Operações matemáticas, concatenação