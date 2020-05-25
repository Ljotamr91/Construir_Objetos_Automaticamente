
// function(){
//     this.marca = marca;
//     this.marca = modelo;
//     this.marca = anyo;git
// }

// var newCoche = coche('Seat', 'Leon', 2020);

// primero construimos el construcor del objeto 
function Coche(marca, modelo, anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
}
// creamos la variable que contendra los datos del objeto
var nuevoCoche = new Coche('Seat', 'Leon', 2020);
console.log(nuevoCoche);

// document.write(nuevoCoche);

for(var i = 1; i<10; i++) {
    console.log(nuevoCoche);
    // document.write(nuevoCoche[1]);


}



