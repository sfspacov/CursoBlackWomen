function retornaUsuario() {
    let usuarioBanco = {
		nome: "Milena",
		genero: "feminino",
		sobre: "Texto sobre a Milena"
	};

    return usuarioBanco;
};

function carregar(){
	let usuario = retornaUsuario();

	document.getElementById('txtNome').value = usuario.nome;

	document.formUsuario.rdGenero.value = usuario.genero;

	document.getElementsByName('txtSobre')[0].value = usuario.sobre;
}

function enviar(){
	let nomeHtml = document.getElementById("txtNome").value;
	let generoHtml = document.formUsuario.rdGenero.value;
	let sobreHtml = document.getElementById("txtSobre").value;

    let usuarioSalvar = {
		nome: nomeHtml,
		genero: generoHtml,
		sobre: sobreHtml
	};

    salvar(usuarioSalvar);
}

function salvar(usuario){
	let mensagem = 'Nome: ' + usuario.nome + '\n' + 'Gênero: ' + usuario.genero + '\n' + usuario.sobre;

	alert(mensagem);
}