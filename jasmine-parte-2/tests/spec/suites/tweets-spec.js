jasmine.getFixtures().fixturesPath = 'spec/fixtures/'; 

describe('Exibição dos últimos tweets do Tableless', function(){
  beforeEach(function(){
    loadFixtures('tweets.html');
    this.addMatchers({
      toBeATweet: function(){ 
                    return this.actual.hasClass('tweet'); 
                  }
    });
  });

  it('Deve carregar na primeira página', function(){
    expect($('#carrega-tweets').data('pagina')).toEqual(1);
  });

  it('Deve executar função para retornar tweets', function(){
    spyOn(Tableless, 'retorna_tweets');
    Tableless.retorna_tweets(1);
    expect(Tableless.retorna_tweets).toHaveBeenCalledWith(1);
  });

  it('Deve carregar os últimos 20 tweets', function(){
    runs(function(){
      Tableless.retorna_tweets(1);
    });
    waits(1500);
    runs(function(){
      expect($('#lista-tweets li').length).toEqual(20);
      $('#lista-tweets li').each(function(){
        expect($(this)).toBeATweet();
      });
    });
  });

});
