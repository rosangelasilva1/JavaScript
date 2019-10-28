
//Classe Cliente com os parâmetros _nome, _telefone, _cpf

var Cliente = function(_nome,_telefone,_cpf){
	this.nome = _nome;
	this.telefone=_telefone;
	this.cpf = _cpf

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
