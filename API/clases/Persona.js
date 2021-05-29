class Persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.IMC = peso / (altura * altura);
  }
  // Método
  calcularIMC = () => {
    var imc = this.peso / (this.altura * this.altura);
    if (imc < 20) {
      return -1;
    } else if (imc > 20 && imc < 25) {
      return 0;
    } else if (imc > 25) {
      return 1;
    }
  };
  esMayorDeEdad = () => {
    if (this.edad > 18) {
      return "Es mayor de edad";
    } else {
      return "No es mayor de edad";
    }
  };
  comprobarSexo = () => {
    if (this.sexo == "H") {
      return "Masculino";
    } else return "Femenino";
  };
  generarNSS = () => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result1 = " ";
    const caracteresLength = caracteres.length;
    for (let i = 0; i < 8; i++) {
      result1 += caracteres.charAt(
        Math.floor(Math.random() * caracteresLength)
      );
    }

    return result1;
  };

  

}

const carlos = new Persona("Carlos", 25, "H", 77, 1.7);
console.log(carlos.calcularIMC());
console.log(carlos.esMayorDeEdad());
console.log(carlos.comprobarSexo());
console.log(carlos.generarNSS());
console.log(carlos);

