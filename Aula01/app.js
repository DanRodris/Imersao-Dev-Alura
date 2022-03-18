function media(){
    var n1 = parseFloat(document.getElementById("nota1").value)
    var n2 = parseFloat(document.getElementById("nota2").value)
    var n3 = parseFloat(document.getElementById("nota3").value)
    var n4 = parseFloat(document.getElementById("nota4").value)

    var media = (n1 + n2 + n3 + n4) /4 

    if (media >= 6){
        document.getElementById("resultado").innerHTML = ("Parabéns, você foi aprovado. Média de  ") + media.toFixed(1)
    
    }else
        document.getElementById("resultado2").innerHTML = ("Reprovado. Média de  ") + media.toFixed(1)
    

   

}