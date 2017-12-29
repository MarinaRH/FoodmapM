$(document).ready(function(){
  var $img=$('#img-foot');
  var modal = $('.modal');

  // funcion para mostrar imagenes de restaurantes
  function showImage(event) {
    for (i = 0; i < data.length; i++) {
      $img.append('<div class="collection" data-name="' + data[i].name + '" data-toggle="modal" data-target="#myModal"><p class="typ">' + data[i].typeFood + '</p><a href="#" ><img class="img"  src=' + data[i].img + '></a></div>');
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
      if ($(this).data('name') === data[i].name) {
        // $('.modal-body').append('<div class="text-center"><h1>' + data[i].name + '</h1><div><img  src=' + data[i].img + '></div><span ></span>' + data[i].addres + '<span>' + data[i].phone + '</span><button type="button" class="btn btn-primary">Pedido</button></div>'); 
        $('#img-modal').attr('src', data[i].img);
        $('#title-modal').text(data[i].addres);
      }
    }
  });
});