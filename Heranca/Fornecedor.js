var Fornecedor = function(){
	this.CNPJ="";

	this.entregarProdutos = function(){
		document.write("O Fornecedor está entregando os produtos");
	}
}

Fornecedor.prototype = new Pessoa();
