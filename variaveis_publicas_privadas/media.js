var Media =  function(){
	this.nota1=0; //variável pública
	this.nota2=0;//variável pública

	var a=2; //exemplo de variável privada (sem a palavra 'this')
	a = a*8
	

	var MostrarValordeA = function(){ //Exemplo de Método privado

	}

	this.Calculo = function(){ //Exemplo de Método Público
		var  media =  (this.nota1 + this.nota2) /2; //variável privada 
		return media;
	}

}