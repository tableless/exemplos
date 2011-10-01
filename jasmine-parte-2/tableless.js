var Tableless = { 

  retorna_tweets: function(pagina){
    $('#carrega-tweets').hide();
    $('#lista-tweets').append('<li class="carregando">Aguarde, carregando...</li>');
    var screen_name = 'tableless';
    var formato = 'json';
    var url = 'http://api.twitter.com/1/statuses/user_timeline.'+formato+"?callback=?";

    $.getJSON(url, {screen_name:screen_name, page:pagina}, function(tweets){
      $('.carregando').fadeOut(function(){
        for(x in tweets)
          $('#lista-tweets').append('<li class="tweet">'+tweets[x].text+'</li>');
        $(this).remove();
        $('#carrega-tweets').data('pagina', pagina + 1).fadeIn();
      });
    });
  }

};

$(function(){
  $('#carrega-tweets').click(function(e){
    Tableless.retorna_tweets($(this).data('pagina'));
    e.preventDefault();
  });
});
