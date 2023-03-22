// *** 1) VALIDAR IBAN ***
// 1.1. Caso 1 -----------------------------------------------------------------
const bankAccount = "ES6600190020961234567890";
const regEx1 = /^ES\d{22}$/;
console.log(`VALIDAR IBAN_CASO 1: ${regEx1.test(bankAccount)}`);

// 1.2. Caso 2: puede haber espacios o no --------------------------------------
const regEx2 = /^ES\d{2}\s?(\d{4}\s?){5}$/;
const bankAccountSpaces = "ES66 0019 0020 9612 3456 7890";
console.log(`VALIDAR IBAN_CASO 2: ${regEx2.test(bankAccountSpaces)}`);

// 1.3 Caso 3: extraer código país y dígito de control -------------------------
const regEx3 = /^(ES)(\d{2}\s?)((\d{4}\s?){5})$/;
console.log(`VALIDAR IBAN_CASO 3: ${regEx3.exec(bankAccountSpaces)}`);
 
// *** 2) VALIDAR MATRÍCULA COCHE ***
// 2.1. Caso 1: matrícula moderna ----------------------------------------------
const matricula1 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
const regEx4 = /^(\d{4})(\s|-)?([A-Z]{3})$/;
for (mat of matricula1) {
    console.log(`VALIDAR MATRÍCULA_CASO 1: ${mat} es ${regEx4.test(mat)}`);

// 2.2. Caso 2: extraer parte numérica y letras:
    console.log(`Extraer parte numérica y letras: ${regEx4.exec(mat)}`);
};

// *** 3) EXTRAER URL DE IMAGEN ***
// 3.1. Caso 1: de una sola línea ----------------------------------------------
const etiqueta = `<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>`;
const regEx5 = /<img(\s|.)*(https.{1,}\.png)/gm;
console.log(`Extraer URL_CASO 1: ${regEx5.exec(etiqueta)}`);

// 3.2. Caso 2: de un HTML extraer todos los src de todos los objetos img -----------------------
const regEx6 = /<img\s*|.*(https.{1,}\.jpg|png)/gm;
const etiqueta2 = `<html>
<body>
  <img
    src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
  />
  <h1>ejemplo</h1>
  <img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  />
</body>
</html>`;
console.log(`Extraer URL_CASO 2: ${etiqueta2.match(regEx6)}`);

// *** 4) VALIDAR TARJETA DE CRÉDITO ***
// 4.1. Validar diferentes formatos --------------------------------------------
const cardtarget = ["5299 6400 0000 0000","5299-6400-0000-0000","5299640000000000"];
const regEx7 = /^(5[0-5]\d{2})[\s|-]?((\d{4}[\s|-]?){3})/;
///^(5[0-5])(\d{2}\s?|-?){7}$/
for(format of cardtarget) {
    console.log(`Validando formatos => ${format} es ${regEx7.test(format)}`)
    console.log(`Extrayendo grupos de 4 dígitos => ${regEx7.exec(format)}`)
};

// *** 5) BUSCAR EXPRESIONES REGULARES ***
// 5.1. Comprobar contraseña ---------------------------------------------------
const strongPassword = ["kJ1er*M45"];
const mediumPassword = ["12mTYsU7"]

const regEx8 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
console.log(`Validando contraseña compleja -> ${regEx8.test(strongPassword)}`);

const regEx9 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/
console.log(`Validando contraseña moderada -> ${regEx9.test(mediumPassword)}`);

// 5.2. Validar URL ------------------------------------------------------------
const URL = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
const regEx10 = /^(https:\/\/)?(\w{3}\.)?.*(\.[a-z]{2,6})$/;

for (link of URL) {
    console.log(`Validando URL -> ${link}: ${regEx10.test(link)}`);
};

// 5.3. Validar color hexadecimal ----------------------------------------------

const colors = ["#1AFFa1", "#F00", "#123456"];
const regEx11 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

for (color of colors) {
    console.log(`Validando color hexadecimal -> ${color}: ${regEx11.test(color)}`);
};







