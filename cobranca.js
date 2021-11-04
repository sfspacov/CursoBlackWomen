function retornarUsuarios()
{
	//simulando uma busca na base de dados
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
	]
	
	return usuarios;
}

function enviarEmail(usuario)
{
	
	let msg = usuario.nome + "\n" +
				"Saldo: " + usuario.saldoDevedor + "\n";
	
	console.log(msg + 
	"\nEmail enviado com sucesso para: " 
	+ usuario.email);
}

function enviarCobranca()
{	
	let usuarios = retornarUsuarios();
	let tamanho = usuarios.length;	
	
	//Loop normal	
	for (let i = 0; i < tamanho ; i++)
	{
		if (usuarios[i].saldoDevedor < 0)
		{			
			//envio de email
			enviarEmail(usuarios[i]);
		}
	}
}

/*
	console.log("Loop inverso:")
	for (let i = tamanho - 1; i >= 0 ; i--)
	{
		let msg = alunas[i] + "\n";

		console.log(msg)
	}
*/