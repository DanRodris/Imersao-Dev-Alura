var carta1 = {
    nome: "Bulbassauro",
    Imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G9gx0bfTaObAzeTUIYVpGgHaFM%26pid%3DApi&f=1",
    atributos:{
        Ataque: 7,
        Defesa: 8,
        Mágia: 6

    }
}

var carta2 = {
    nome: "Darth Vader",
    imagem:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eu1eBrrow3_BYyEZ1wSCywHaJA%26pid%3DApi&f=1",
    atributos:{
        Ataque: 8,
        Defesa: 9,
        Mágia: 10

    }
}

var carta3 = {
    nome: "Shiryu do Dragão",
    Imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2F43%2F87%2F7a438762e112faf390c0ca8a31006df1.jpg&f=1&nofb=1",
    atributos:{
        Ataque: 10,
        Defesa: 8,
        Mágia: 9

    }
}



var cartas = [carta1,carta2,carta3.length]
var cartaMaquina 
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)

    cartaMaquina = cartas[numeroCartaMaquina];

   
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];


    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    
    exibirCartaJogador()
}




function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i ++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[1].value

        }
    }

}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você Venceu"
    }else if (valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = "Você Perdeu, a carta da máquina é maior"
    }else{
        elementoResultado.innerHTML = "Empatou"
    }
    console.log(cartaMaquina)
    console.log(cartaJogador)

}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogado");
    divCartaJogador.style.backgroundImage ='url(${cartaJogador.imagem})';
    //divCartaJogador.style.backgroundImage ="url(" + cartaJogador.imagem +")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021 card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
     var tagHtml = "<div id='opcoes' class=' cartas-status'>"
    
    var opcoesTexto = "";
    for ( var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' name ='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = '<p class="carta-subtitle">${cartaJogador.nome}</P>'
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + '</div>'

    }