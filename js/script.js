function liglampa() {
if(document.getElementById("btnlampada").value == "Ligar")
 {
  document.getElementById("btnlampada").value = "Desligar";
  document.getElementById("lampada").src="./img/lampadaacesa.png";
  window.document.getElementById("btnlampada").style.background = "#000";
  window.document.getElementById("btnlampada").style.color = "#FF0";
 } 
 else if(document.getElementById("btnlampada").value == "Desligar")
 {
  document.getElementById("btnlampada").value = "Ligar";
  document.getElementById("lampada").src="./img/lampadaapagada.png";
  window.document.getElementById("btnlampada").style.background = "#D3D3D3";
  window.document.getElementById("btnlampada").style.color = "#000000";

 } 
 else
 {
  document.getElementById("btnlampada").value = "Ligar";
 }
}

function liginter() {
  if(document.getElementById("btninteruptor").value == "Ligar")
 {
  document.getElementById("btninteruptor").value = "Desligar";
  document.getElementById("interuptor").src="./img/interuptorligado.png";
  window.document.getElementById("btninteruptor").style.background = "#000";
  window.document.getElementById("btninteruptor").style.color = "#FF0";
 } 
 else if(document.getElementById("btninteruptor").value == "Desligar")
 {
  document.getElementById("btninteruptor").value = "Ligar";
  document.getElementById("interuptor").src="./img/interuptordesligado.png";
  window.document.getElementById("btninteruptor").style.background = "#D3D3D3";
  window.document.getElementById("btninteruptor").style.color = "#000000";
 } 
 else
 {
  document.getElementById("btninteruptor").value = "Ligar";
 }
}