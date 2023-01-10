let messageUser = "";
botaoCriptografar = document.getElementById("botao-criptografar");
botaoDescriptografar = document.getElementById("botao-descriptografar");

//Função botão Criptografar
function criptografar() {
  messageUser = document.getElementById("textinput").value.toLowerCase();

  if (messageUser != "") {
    document.getElementById("botao-copiar").style.display = "block";
    document.getElementById("retangulo-logo").style.display = "none";

    let resultEncode = messageUser.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("texto-retangulo").innerHTML = resultEncode;
  } else {
    alert("Digite algo para continuar...");
  }
}

botaoCriptografar.addEventListener("click", criptografar);

//Função botão Descriptografar
function descriptografar() {
    messageUser = document.getElementById("textinput").value.toLowerCase();
  
    if (messageUser != "") {
      document.getElementById("botao-copiar").style.display = "block";
      document.getElementById("retangulo-logo").style.display = "none";
  
      let resultEncode = messageUser.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
      document.getElementById("texto-retangulo").innerHTML = resultEncode;
    } else {
      alert("Digite algo para continuar...");
    }
  }


botaoDescriptografar.addEventListener("click", descriptografar);

//Função botão Copiar
function copiar() {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("texto-retangulo").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  alert("Mensagem copiada!");
}


document.getElementById("botao-copiar").addEventListener("click", copiar);