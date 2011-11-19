(function($){
    $.fn.marcaTexto = function(opcoes) {
	 // opções padrão
	 var defaults = {
		 termo: '',
		 corTexto: '#000',
		 corFundo: '#ffff00',
		 classe: 'marcaTexto'
	 };
 
	 // se o parâmetro passado for um array, carrega as opções
	 if( $.isArray( opcoes ) )
	 {
		 opcoes = $.extend(defaults, opcoes);
	 }
	 // caso seja string, o usuário passou apenas o termo a ser marcado
	 else
	 {
		 defaults.termo = opcoes;
		 opcoes = defaults;
	 }
 
	 // varre o seletor passado
	 return this.each(function(){
		 // armazena o texto do elemento
		 var content = $(this).text();
		 // pesquisa por termo no texto
		 var re = new RegExp( opcoes.termo, 'i' );
		 var result = content.match( re );
		 // caso tenha encontrado ocorrências do texto...
		 if( result )
		 {
			 // busca novamente, só que agora adicionando a marcação ao(s) termo(s)
			 re = new RegExp( opcoes.termo, 'gi' );
			 content = content.replace( re, '<span class="' + opcoes.classe + '" style="color:' + opcoes.corTexto + ';background-color:' + opcoes.corFundo + '">' + opcoes.termo + '</span>');
			 // altera o HTML do elemento original
			 $(this).html( content );
		 }
	 });
 
    };
})(jQuery);