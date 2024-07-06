let inputfield_userinput = document.getElementById("user_input");
let outputfield_userinput = document.getElementById("crypt_return");
let erroMensage = document.getElementById("erro_no_msg");
let outputInfo = document.getElementById("no_mensagem");

let button = document.getElementById("decodeBTN");

let lastAnagram = '';

button.style.visibility = "hidden";
erroMensage.style.visibility = "hidden";
outputfield_userinput.style.visibility = "hidden";
outputInfo.style.visibility = "visible";

function cryptBtn() {
  if (inputfield_userinput.value == "") {
    erroMensage.style.visibility = "visible";
    outputInfo.style.visibility = "visible";
    outputfield_userinput.style.visibility = "hidden";
  } else {
    cryptMsg(inputfield_userinput.value);
    outputInfo.style.visibility = "hidden";
    erroMensage.style.visibility = "hidden";
    outputfield_userinput.style.visibility = "visible";
    button.style.visibility = "visible";
    inputfield_userinput.value = '';
  }
}

function cryptMsg(text) {
  // Remove espaços e transforma o texto em minúsculas
  const cleanedText = text.replace(/\s/g, "").toLowerCase();

  // Converte o texto em um array de caracteres
  const charArray = Array.from(cleanedText);

  // Embaralha os caracteres aleatoriamente
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }

  // Junta os caracteres novamente para formar o anagrama
  const anagram = charArray.join("");

  outputfield_userinput.innerHTML = anagram;
  lastAnagram = text;

  outputfield_userinput.disabled = true;
}

function descrypt() {
  outputfield_userinput.innerHTML = lastAnagram;
  console.log(lastAnagram);
  button.style.visibility = "hidden";
}
