function retornarUsuarios()
{
	let meusArrays = retornaArray();
	console.log(meusArrays);

	// Aula Parâmetros Função
	exibePorParametro('Ana Paula');
	exibePorParametro('Milena');
	exibePorParametro(['Ana Paula','Milena']);
	exibePorParametro(34);
	exibePorParametro(72.6);
	exibePorParametro({valor: 54.70, unidade: "kg"});

	exibePorIdade(12);
	exibePorIdade(18);

	let usuario = {
		nome: 'Lucas',
		idade: idadeUsuario()
	}

	let arrayIdade = [10, 20, idadeUsuario()];
	console.log(arrayIdade);
	
	let calculo = retornoSoma(2, 4);
	console.log(calculo);

	console.log(retornoSoma(3, 6));

	exibeObjetoParametros(
		'Nome', 
		18, 
		68.3, 
		[2, 4, 8], 
		{nome: 'Lucas', idade: 30},
		15
	);

	exibeObjetoParametros(
		'Nome', 
		18, 
		68.3
	);
	
	let usuario2 = {
		nome: 'teste',
		idade: 30,
		sexo: 'm'
	};
	
	exibeObjetoUsuario(usuario2);
	exibeObjetoUsuario('123');
}

function idadeUsuario()
{
	return 34;
}

function exibePorParametro(parametro1)
{
	console.log(parametro1);
}

function exibePorIdade(idade)
{
	if(idade >= 18)
	{
		console.log('Conteudo adulto');
	}
	else{
		console.log('Conteudo restrito');
	}
}

function retornoSoma(parametro1, parametro2){
	let retorno = parametro1 + parametro2;

	return retorno;
}

function exibeObjetoParametros(parametro1, parametro2, parametro3, parametro4 = 'Teste4', parametro5 = [5], parametro6 = {valor: 6}){
	// console.log(parametro1);
	// console.log(parametro2);
	// console.log(parametro3);
	// console.log(parametro4);
	// console.log(parametro5);

	let objeto = {
		p1: parametro1,
		p2: parametro2,
		p3: parametro3,
		p4: parametro4,
		p5: parametro5,
		p6: parametro6
	}

	console.log(objeto);
}

function exibeObjetoUsuario(x){
	console.log(x.nome);
	console.log(x.idade);
	console.log(x.sexo);
}

function retornarUsuario()
{
	let usuario = 
	{
		nome: "Milena",
		email: "milena@gmail.com",
		cpf: "178.187.147-81",
		idade: 20,
		peso:
		{
			valor: 54.70,
			unidade: "kg"
		},
		sangue: 
		{
			tipo: "A",
			rh: "+"
		}
	}
	
	return usuario;
}

function retornaArray()
{
	let produtos = [ "PS5", "Mouse optico", "Rayban", "Boné" ];
	let notasP1 = [ 10, 8.5, 0, 2.3, 5 ];
	let usuarios = 
	[
		{
			nome: "Angela",
			email: "angela@gmail.com",
			saldoDevedor: 0
		},
		{
			nome: "Ana Paula",
			email: "anapaula@gmail.com",
			saldoDevedor: -100
		},
		{
			nome: "Carla",
			email: "carla@gmail.com",
			saldoDevedor: -200
		},
		{
			nome: "Irani",
			email: "irani@gmail.com",
			saldoDevedor: 0
		}
	];

	let listaSemTipo = ["string", 1, {}, []];
	
	//Loop normal	
	for (let i = 0; i < tamanho ; i++)
	{
		if (usuarios[i].saldoDevedor < 0)
		{			
			//envio de email
			enviarEmail(usuarios[i]);
		}
	}
	
	return retornoDaFuncao;
}
