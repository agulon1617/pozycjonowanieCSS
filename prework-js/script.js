let name = 'Hans';

name = 'Monika';
let number = 8;
let boolen =true;

let array=[1, 2, 3, 108];
let objectH1 = document.querySelector('h1');

objectH1.innerText ='Kurs Javascript';/* zmodyfikowanie tekstu h1 */
  
console.log(objectH1); 

//if(boolen){
    console.log("warunek zostal spelniony");
//}
if (number === 108){
    console.log("spelniony warunek ===108");
} else if (number ===110) {console.log("spelniony warunek ===110")

}
else {
    console.log("zaden z powyzszych warunkow nie zostal spelniony");
}
let result =number +2; /* operator np.dodawania */
let numberTxt ='9';
if(number != numberTxt);
console.log("wartosc zmiennych Nie sa rowne");
if(number !== numberTxt) {
    console.log("wartosci zmiennych i ich typy sa Nie rowne");
}

function multiply(num1,num2){ /*mnozenie lub let firstNumber=1
    let secondNumber=2
    function sum(firstNumber, secondNumber) {
        let result = firstNumber + secondNumber;
        return result;
      }
    let result = num1, num2) {
        return result;
}

console.log(multiply(2, 3));

let wynikMnozenia =multiply(108/* albo number z listy z gory */,2);
console.log(wynikMnozenia);
//
let myHeading =document.querySelector('h1');
myHeading.textContent = 'Hans - JS - Click';/* modyfikacja tekstu ponownie h1 */
myHeading.onclick = function() {
alert("wlasnie kliknales tekst naglowka<h1>");
}

console.log(myHeading);
