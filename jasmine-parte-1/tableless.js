function saudacao(hora_atual){
  var hora;

  if(typeof hora_atual == 'undefined'){
    var data = new Date;
    data.setTime(data.getTime()); 
    hora = data.getHours();
  }else{
    hora = hora_atual.split(':');
    hora = parseInt(hora[0].replace(/^0/, ''));
  }

  if(hora < 5) 
    $('#mensagem').text('Dormir é para os fracos!');
  else if(hora < 12)
    $('#mensagem').text('Bom-dia!');
  else if(hora < 18)
    $('#mensagem').text('Boa-tarde!');
  else
    $('#mensagem').text('Boa-noite!');
}
