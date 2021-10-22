function finalizarCompra()
{
	let meusArrays = retornaArray();
	
	console.log(meusArrays);
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
			nome: "Ana Paula",
			idade: 30,
			sangue: 
			{
				tipo: "A",
				rh: "+"
			}
		},
		{
			nome: "Irani",
			idade: 25,
			sangue:
			{
				tipo: "O",
				rh: "-"
			}
		},
		{
			nome: "Verônica",
			idade: 25,
			sangue:
			{
				tipo: "AB",
				rh: "+"
			}
		}
	];	
	let listaSemTipo = ["string", 1, {}, []];
	
	let retornoDaFuncao =
	{
		listaDeProdutos: produtos,
		listaDeNotas: notasP1,
		listaDeUsuarios: usuarios,
		listaMaluca: listaSemTipo
	}
	
	return  retornoDaFuncao
}