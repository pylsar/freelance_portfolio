$(document).ready(function(){
  //change mode
  $('#light').on('click', function(){
    $('body').css('background', '#1b1b1b');
    $('body, h1, h2, a, .header__text--description, .btn_menu').css('color', 'white');
    $('.header-toggle ul li').toggleClass('dark');
  });
  $('#dark').on('click', function(){
    $('body').css('background', '#f0f8ff');
    $('body, h1, h2, a, .header__text--description, .btn_menu').css('color', 'black');
    $('.header-toggle ul li').toggleClass('dark');
  });

  // to the top
  let $btnTop = $('.top');
  $(window).on('scroll', function(){
    if ($(window).scrollTop() >= 500){
      $btnTop.fadeIn();
    }else{
      $btnTop.fadeOut();
    }
  });
  $btnTop.on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500)
  });

  // hamburger 
  $('#btn_menu').on('click', function(){
    $('.hamburger').toggleClass('menuToggle');

  });



});



 
