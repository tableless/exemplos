(function($){
    $.fn.fila = function(opcoes) {

	 // opções padrão
	 var defaults = {
		 first: 'first',
		 last: 'last'
	 };

	 opcoes = $.extend(defaults, opcoes);

	 return this.each(function(){
		 if(opcoes.first) $(this).find(':first-child').addClass(opcoes.first);
		 if(opcoes.last) $(this).find(':last-child').addClass(opcoes.last);
	 });

    };
})(jQuery);