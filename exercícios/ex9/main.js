var hora = prompt("Que horas são?");

if ((hora == 0) || (hora <=19)) { 
    alert("Dia");
}
else if ((hora == 20) || (hora <=23)) {
    alert("Noite");
} 
else {
    alert("Horário incorreto");
};