
//Classe Cliente com os parâmetros hash

var Cliente = function(_campos){

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
		Cliente.clientes.push(this);
	}
}

Cliente.clientes = []; //Variavel estática


//Método Estático
Cliente.todos = function(){ 
	for(i=0;i<Cliente.clientes.length;i++){
		var_cliente = Cliente.clientes[i];

		document.write("Nome:" + var_cliente.nome + "<br>");
		document.write("Telefone:" + var_cliente.telefone + "<br>");
		document.write("CPF:" + var_cliente.cpf + "<br>");
		document.write("<hr>");
	}


}
