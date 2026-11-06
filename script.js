function generateNumber(){

const  min = Math.ceil(document.querySelector('.input-min').value);
const  max = Math.floor(document.querySelector('.input-max').value);


if (max > min) {

const result = Math.floor(Math.random() * (max - min + 1)) + min;

   alert("O número sorteado é: " + result);
} 

else {
   alert("O valor máximo não pode ser menor que o valor mínimo. Por favor, insira valores válidos.");
}


}

