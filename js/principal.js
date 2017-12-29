$(document).ready(function(){
  var $img=$('#img-foot');

  // funcion para mostrar imagenes de restaurantes
  function showImage(event) {
    for (i = 0; i < data.length; i++) {
      $img.append('<div class="collection"><p class="name" id="type">' + data[i].typeFood + '</p><a href="#"   data-toggle="modal" data-target="#myModal"><img class="img"  src=' + data[i].img + '></a></div>');
    }
  }
  showImage();
  
  // primero ocultar todas las imagenes de restaurant
  $('#search').keyup(function() {
    var nombre = $(this).val();
    $('.collection').hide();
    // funcion para filtrar por tipo de comida
    $('.collection').each(function() {
      var search = $(this).text();
      if (search.indexOf(nombre) !== -1) {
        $(this).show();
      }
    });
  });
  // $('.collection').on('click',function() {
  //   for (i = 0; i < data.length; i++) {
  //     if ($(this).data('name') === data[i].name) {
  //       $('.logo-restaurant').attr('src', data[i].img);
  //       $('#title-modal').text(data[i].addres);
  //     }
  //   }
  // funcion para agregar datos a modal
  $('.collection').on('click',function() {
    for (i = 0; i < data.length; i++) {
      $('.modal-body').append('<div class="text-center"><h1>' + data[i].name + '</h1><div><img class="img"  src=' + data[i].img + '></div><span ></span>' + data[i].addres + '<span>' + data[i].phone + '</span><button type="button" class="btn btn-primary">Pedido</button></div>');  
    }
  });
});