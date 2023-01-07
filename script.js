const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular')
const resultado = document.getElementById('resultado')
const form = document.getElementById('form')

btn.addEventListener('click', btnCalcular);

function btnCalcular(){
    let input1N = parseInt(input1.value);
    let input2N = parseInt(input2.value);
    let resultadoSuma = input1.value + input2.value;
    let resultadoConcatenar = input1N + input2N; 
    // console.log(event);
    //event.preventDefault();
    resultado.innerHTML = "Resultado suma: " + resultadoSuma
    resultado.innerHTML += " <br> Resultado concatenar: " + resultadoConcatenar
}
