$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header, .goto').addClass('active');
    } else {
      $('header, .goto').removeClass('active');
    }
  });

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()

  // trigger
  $('.trigger').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');

    $('section, .nav a').click(function() {
      $('.trigger, nav').removeClass('active');
    });
  });

    /* Slick Slider - Welcome */
  $('.main-img').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* recommend tab-menu */
  $('.recommend-list > div').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.recommend-con').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
  });
});



