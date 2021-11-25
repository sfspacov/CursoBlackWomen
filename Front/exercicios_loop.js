/* Revisão */
let a = 1; // Atribuição (Tipo Numerico)
let b = '1'; // Atribuição (Tipo String)

if(a == b) // Comparação de valor

if(a === b) // Comparação de valor e tipo

function LoopFor()
{
	// 	 Declaração        Condição      Incremento
	for (let contador = 0; contador < 3; contador++) {
		// Instrução
		console.log('Valor: ' + contador);
	}
}

function LoopWhile()
{
	// Declaração   		
	let contador = 0;
	
	// Condição         
	while (contador < 3) {
		// Instrução
		console.log(contador);
		
		// Incremento
		contador = contador + 1;
	}
}

// Diferentes formas de incrementar o valor '1' a variável contador
contador++;
contador = contador + 1;


/*
LIÇÃO DE CASA:

1) Escreva um algoritmo, usando loop for que imprima todos os numeros de 0 a 100

2) Escreva um algoritmo, usando loop while que imprima todos os numeros de 0 a 100

3) Escreva uma função que receba um número como parâmetro. Se ele é par, imprima todos os números pares de 0 a 100, se é impar imprima os números impares
*/

function licao1(){
	for(let contador = 0 ; contador <= 100 ; contador++)
	{
		console.log(contador);
	}
}

function licao2()
{
	let contador = 0;
	
	while(contador <= 100)
	{
		console.log(contador);
		
		// contador++;
		contador = contador + 1;
	}
}

function licao3(numero)
{
	if(numero % 2 === 0) // Par
	{
		for(let contador = 0 ; contador <= 100 ; contador++)
		{
			if(contador % 2 === 0)
				console.log(contador);
		}
	}
	else // Ímpar
	{
		let contador = 0;
		
		while(contador <= 100)
		{
			if(contador % 2 !== 0)
				console.log(contador);
			
			contador++;
		}
	}
}

function LoopArray()
{
	let idades = [14, 21, 35, 83, 91];
	
	for(let contador = 0 ; contador < idades.length ; contador++)
	{
		console.log(idades[contador]);
	}
}

let nomes = ['Ana Paula', 'Angel', 'Jessica', 'Milena', 'Veronica'];

function LoopArrayParametro(paramNomes)
{
	let contador = 0;
	
	while(contador < paramNomes.length)
	{
		console.log(paramNomes[contador]);
		
		contador = contador + 1;
	}
}
