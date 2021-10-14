function finalizarCompra()
{	
	let usuario = retornarUsuario();
	let compra = retornarCompras();
	let msg = 
				"Usuario: " + usuario + "\n" +
				"Compra: " + compra;
	
	console.log(msg);
}

function retornarUsuario()
{
	let nome = 'Jessica'; 	//string
	let idade = 24;			//int	
	
	return nome + ', ' + idade;
}

function retornarCompras()
{
	let produto = 'PlayStation 5'
	
	return produto;
}