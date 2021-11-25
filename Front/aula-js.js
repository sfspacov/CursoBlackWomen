function capturarValores()
{
	let uf = document.getElementById("comboUf");
	let sigla = uf.options[uf.selectedIndex].value;
	let nome = uf.options[uf.selectedIndex].text;

	let algumFoiChecado = document.querySelector('.messageCheckbox').checked;
	let checados = document.querySelector('.messageCheckbox:checked');
	
	if (checados != null)
	{
		let valoresSelecionados = []; 
		let inputElements = document.getElementsByClassName('messageCheckbox');
		for(let i=0; inputElements[i]; ++i){
			  if(inputElements[i].checked){
				   valoresSelecionados.push(inputElements[i].value);				   
			  }
		}
		
		let msg = 
					"Valor selecionado: " + sigla +
					"\nTexto selecionado:" + nome
		console.log(valoresSelecionados);
	}
	else
	{
		console.log("Selecione algum valor");
	}
}