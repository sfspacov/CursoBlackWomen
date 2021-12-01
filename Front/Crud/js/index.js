//loadUsers();
//loadUfs();

//javascript NATIVO = Vanilla Javascript

fetch('http://localhost:8800/usuario') //chamando uma api
  .then(response => response.json()) //birunda
  .then(
			birunda => 
			console.log(birunda)
		);