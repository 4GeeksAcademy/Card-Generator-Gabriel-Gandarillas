import "bootstrap";
import "./style.css";




window.onload = function generarcartas() {
  //write your code here
  const palos = [
    {icon: "bi-suit-heart-fill", color: "text-danger"},
    {icon: "bi-suit-diamond-fill", color: "text-danger"},
    {icon: "bi-suit-spade-fill", color: "text-dark"},
    {icon: "bi-suit-club-fill", color: "text-dark"}
  ]
  const numeros =["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]
  
  let palo = palos[Math.floor(Math.random() * palos.length)]
    
  let numero = numeros[Math.floor(Math.random() * numeros.length)]
    
  document.getElementById("card-numero").textContent = numero

  document.getElementById("card-palo-top").innerHTML = `<i class="bi ${palo.icon} ${palo.color}"></i>`

  document.getElementById("card-palo-bottom").innerHTML = `<i class="bi ${palo.icon} ${palo.color}"></i>`


};
