describe('Exibição da mensagem de boas-vindas', function(){
  beforeEach(function(){
    setFixtures('<div id="mensagem" />');
    this.horas = [];
    this.mensagem = $('#mensagem');
  });

  it("Deve exibir 'Bom-dia!' entre 5:00 e 11:59", function(){
    this.horas = ['05:00', '09:33', '10:22', '11:59'];
    for(i in this.horas){
      saudacao(this.horas[i]);
      expect(this.mensagem.text()).toEqual('Bom-dia!');
    }
  });

  it("Deve exibir 'Boa-tarde!' entre 12:00 e 17:59", function(){
    this.horas = ['12:00', '13:33', '16:00', '17:59'];
    for(i in this.horas){
      saudacao(this.horas[i]);
      expect(this.mensagem.text()).toEqual('Boa-tarde!');
    }
  });

  it("Deve exibir 'Boa-noite!' entre 18:00 e 23:59", function(){
    this.horas = ['18:00', '19:56', '22:43', '23:59'];
    for(i in this.horas){
      saudacao(this.horas[i]);
      expect(this.mensagem.text()).toEqual('Boa-noite!');
    }
  });

  it("Deve exibir 'Dormir é para os fracos!' de 00:00 a 04:59", function(){
    this.horas = ['00:00', '01:01', '02:48', '04:59'];
    for(i in this.horas){
      saudacao(this.horas[i]);
      expect(this.mensagem.text()).toEqual('Dormir é para os fracos!');
    }
  });

  it("Deve exibir, por padrão, a mensagem de acordo com a hora do cliente", function(){
    var data = new Date;
    data.setTime(data.getTime()); 
    var hora = data.getHours();

    saudacao();

    var texto = this.mensagem.text();
    if(hora < 5)
      expect(texto).toEqual('Dormir é para os fracos!');
    else if(hora < 12)
      expect(texto).toEqual('Bom-dia!');
    else if(hora < 18)
      expect(texto).toEqual('Boa-tarde!');
    else
      expect(texto).toEqual('Boa-noite!');
  });
});
