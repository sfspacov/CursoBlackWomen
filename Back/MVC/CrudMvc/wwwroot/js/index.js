//loadUsers();
//loadUfs();

//javascript NATIVO = Vanilla Javascript

fetch('http://localhost:45628/usuario/get') //chamando uma api
  .then(response => response.json()) //birunda
  .then(
			birunda => 
			console.log(birunda)
		);