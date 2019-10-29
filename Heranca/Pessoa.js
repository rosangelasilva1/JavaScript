

var Pessoa = function(_campos){

	if(_campos !=undefined){

		if(_campos.nome !=undefined)
			this.nome = _campos.nome;
		else
			this.nome = "";

		if(_campos.telefone !=undefined)
				this.telefone = _campos.telefone;
			else
				this.telefone = "";

		if(_campos.cpf !=undefined)
				this.cpf = _campos.cpf;
			else
				this.cpf = "";
	}

	this.Mostrar = function(){

	document.write("Nome:" + this.nome + "<br>");
	document.write("Telefone:" + this.telefone + "<br>");
	document.write("Cpf:" + this.cpf + "<br>");
	}

	this.GravarEmMemoria = function(){
		Pessoa.ListaDePessoas.push(this);
	}
}

Pessoa.ListaDePessoas = []; //Variavel estática


//Método Estático
Pessoa.todos = function(){ 
	for(i=0;i<Pessoa.ListaDePessoas.length;i++){
		var_pessoa = Pessoa.ListaDePessoas[i];

		document.write("Nome:" + var_pessoa.nome + "<br>");
		document.write("Telefone:" + var_pessoa.telefone + "<br>");
		document.write("CPF:" + var_pessoa.cpf + "<br>");
		document.write("<hr>");
	}
}
