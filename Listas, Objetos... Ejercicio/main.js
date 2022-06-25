const alexis = {
    nombre: "Alexis",
    edad: 23,
    desarrollador: true,
    nacimiento: ["may 10 1999"],
    librofavorito: {
        titulo: "La isla misteriosa",
        autor: "Julio Verne",
        fecha: "No se",
        url: false
    },
} 

console.log(alexis.nombre);

const lista = [
    "Alexis",
    23,
    true,
    new Date(1999, 05, 10),
    { 
        titulo: "La isla misteriosa",
        autor: "Julio Verne",
        fecha: new Date(1990, 0, 2),
        url: "https://www.amazon.com.mx/isla-misteriosa-Julio-Verne-ebook/dp/B00JF6JOX4/ref=sr_1_10?__mk_es_MX=ÅMÅŽÕÑ&crid=9LF5UD1FTTTH&keywords=Julio+verne&qid=1656121402&sprefix=julio%2Caps%2C1207&sr=8-10"
      },
  ];


//   Sentencia Switch

let nota = 5;

switch (nota) {
    case 5:
        console.log("Buen trabajo, ¡Sobresaliente!")
        break;
    case 4:
        console.log("Buen trabajo, ¡Sobresaliente!")
        break;
    case 3:
        console.log("Suficiente pero no bien")
        break;
    case 2:
        console.log("Valiste verga pa")
        break;
    case 1:
        console.log("A chinga, venias?")
        break;
    default:
        console.log("Error");
        break;

}