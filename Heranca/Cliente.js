var Cliente = function(){
	
	this.CodigoCliente  = ""

	this.LocalizarCliente = function(codigoCliente){
		document.write("Cliente Localizado")
	}


	this.Mostrar = function(){
		document.write("CodigoCliente:" + this.CodigoCliente + "<br>");
	}

}

Cliente.prototype = new Pessoa();