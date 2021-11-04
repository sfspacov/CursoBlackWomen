/*
Exercício 1: Resposta D
*/

function funcao1 () {
    let usuarios = [
        {nome: "Milena", cor: "vermelho", signo: "libra"},
        {nome: "Nathalia", cor: "azul", signo: "leão"},
        {nome: "Maria", cor: "branco", signo: "leão"}
    ];

    return usuarios;
};

function funcao2(){
	let animal = { 
		especies1: ['gato', 'cachorro', 'macaco', 'zebra'],
		especies2: ['lagarto', 'boi', 'cavalo'],
		especies3: ['passáro', 'leão', 'girafa', 'esquilo']
	};

	return animal;
}

function funcao3(){
	let valida = false;

	if(valida == true)
	{
		let imprimeTrue = funcao1();
		console.log(imprimeTrue);
	}
	else
	{
		console.log(funcao2());
	}
	
	document.getElementById('p_valor').value = valida;
}