/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#La-excusa").innerHTML = generarExcusa();
  });
  console.log("Hello Rigo from the console!");
};

let generarExcusa = () => {
  let quien = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let accion = ["se comió", "se orinó", "aplasto", "rompió"];
  let objeto = ["mi tarea", "las llaves", "el coche"];
  let cuando = [
    "antes de la clase",
    "justo a tiempo",
    "cuando termine",
    "mientras oraba"
  ];

  let quienindex = Math.floor(Math.random() * quien.length);
  let accionindex = Math.floor(Math.random() * accion.length);
  let objetoindex = Math.floor(Math.random() * objeto.length);
  let cuandoindex = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienindex] +
    " " +
    accion[accionindex] +
    " " +
    objeto[objetoindex] +
    " " +
    cuando[cuandoindex] +
    " "
  );
};
