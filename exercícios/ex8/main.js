var nome = prompt("Qual o seu nome?*");
var sexo = prompt("Qual o seu sexo?");

if (sexo == "feminino") { 
    alert("Bem-vinda, " + nome);
}
else if (sexo == "masculino") {
    alert("Bem-vindo, " + nome);
} 
else {
    alert("Olá, " + nome);
};
