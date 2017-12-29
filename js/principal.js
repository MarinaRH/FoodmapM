$(document).ready(function(){
  var $img=$('#img-foot');

  //  agregar imagenes de restaurantes
  function showImage(event) {
    for (i = 0; i < data.length; i++) {
      $img.append('<div class="img-restaurant" data-name="' + data[i].name + '" data-toggle="modal" data-target="#myModal"><p class="typ">' + data[i].typeFood + '</p><a href="#" ><img class="img"  src=' + data[i].img + '></a></div>');
    }
  }
  showImage();
  
  // primero ocultar todas las imagenes de restaurant
  $('#search').keyup(function() {
    var nombre = $(this).val();
    $('.img-restaurant').hide();

    // funcion para filtrar por tipo de comida arabe-italiana-peruana-coreana
    $('.img-restaurant').each(function() {
      var search = $(this).text();
      if (search.indexOf(nombre) !== -1) {
        $(this).show();
      }
    });
  });
  
  // funcion para agregar datos a modal
  $('.img-restaurant').on('click',function() {
    for (i = 0; i < data.length; i++) {
      if ($(this).data('name') === data[i].name) {
        $('#title-modal').text(data[i].name);
        $('#img-modal').attr('src', data[i].img);
        $('#adress-modal').text(data[i].address);
        $('#phone-modal').text(data[i].phone);
        // $('.modal-body').append('<div class="text-center"><h1>' + data[i].name + '</h1><div><img  src=' + data[i].img + '></div><span ></span>' + data[i].addres + '<span>' + data[i].phone + '</span><button type="button" class="btn btn-primary">Pedido</button></div>'); 
      }
    }
  });

  // evento mouseover
  $('.img-restaurant img').mouseover(function() {
    $( this).toggleClass('img-hover');
  });
});